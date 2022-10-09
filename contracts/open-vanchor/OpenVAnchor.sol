/**
 * Copyright 2021 Webb Technologies
 * SPDX-License-Identifier: GPL-3.0-or-later-only
 */

pragma solidity ^0.8.0;

import "../interfaces/ITokenWrapper.sol";
import "../interfaces/IMintableERC20.sol";
import "./OpenVAnchorBase.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../utils/ChainIdWithType.sol";

/**
	@title Variable Anchor contract
	@author Webb Technologies
	@notice The Variable Anchor is a variable-denominated shielded pool system
	derived from Tornado Nova (tornado-pool). This system extends the shielded
	pool system into a bridged system and allows for join/split transactions.

	The system is built on top the VAnchorBase/AnchorBase/LinkableAnchor system which allows
	it to be linked to other VAnchor contracts through a simple graph-like
	interface where anchors maintain edges of their neighboring anchors.

	The system requires users to create and deposit UTXOs for the supported ERC20
	asset into the smart contract and insert a commitment into the underlying
	merkle tree of the form: commitment = Poseidon(chainID, amount, pubKey, blinding).
	The hash input is the UTXO data. All deposits/withdrawals are unified under
	a common `transact` function which requires a zkSNARK proof that the UTXO commitments
	are well-formed (i.e. that the deposit amount matches the sum of new UTXOs' amounts).
	
	Information regarding the commitments:
	- Poseidon is a zkSNARK friendly hash function
	- destinationChainID is the chainId of the destination chain, where the withdrawal
	  is intended to be made
	- Details of the UTXO and hashes are below

	UTXO = { destinationChainID, amount, pubkey, blinding }
	commitment = Poseidon(destinationChainID, amount, pubKey, blinding)
	nullifier = Poseidon(commitment, merklePath, sign(privKey, commitment, merklePath))

	Commitments adhering to different hash functions and formats will invalidate
	any attempt at withdrawal.
	
	Using the preimage / UTXO of the commitment, users can generate a zkSNARK proof that
	the UTXO is located in one-of-many VAnchor merkle trees and that the commitment's
	destination chain id matches the underlying chain id of the VAnchor where the
	transaction is taking place. The chain id opcode is leveraged to prevent any
	tampering of this data.
 */
contract OpenVAnchor is OpenVAnchorBase {
	using SafeERC20 for IERC20;
	using SafeMath for uint256;
	address public immutable token;

	constructor(
		uint32 _levels,
		IHasher _hasher,
		address _handler,
		address _token
	) OpenVAnchorBase (
		_levels,
		_hasher,
		_handler
	) { token = _token; }

	/**
		@notice Wraps a token for the `msg.sender` using the underlying TokenWrapper contract
		@param _tokenAddress The address of the token to wrap
		@param _amount The amount of tokens to wrap
	 */
	function wrapToken(address _tokenAddress, uint256 _amount) public {
		ITokenWrapper(token).wrapFor(msg.sender, _tokenAddress, _amount);
	}

	/**
		@notice Unwraps the TokenWrapper token for the `msg.sender` into one of its wrappable tokens.
		@param _tokenAddress The address of the token to unwrap into
		@param _amount The amount of tokens to unwrap
	 */
	function unwrapIntoToken(address _tokenAddress, uint256 _amount) public {
		ITokenWrapper(token).unwrapFor(msg.sender, _tokenAddress, _amount);
	}

	/**
		@notice Wrap the native token for the `msg.sender` into the TokenWrapper token
		@notice The amount is taken from `msg.value`
	 */
	function wrapNative() payable public {
		ITokenWrapper(token).wrapFor{value: msg.value}(msg.sender, address(0), 0);
	}

	/**
		@notice Unwrap the TokenWrapper token for the `msg.sender` into the native token
		@param _amount The amount of tokens to unwrap
	 */
	function unwrapIntoNative(address _tokenAddress, uint256 _amount) public {
		ITokenWrapper(token).unwrapFor(msg.sender, _tokenAddress, _amount);
	}
	
	function _executeWrapping(
		address _tokenAddress,
		uint256 depositAmount
	) payable public {
		// Before executing the wrapping, determine the amount which needs to be sent to the tokenWrapper
		uint256 wrapAmount = ITokenWrapper(token).getAmountToWrap(depositAmount);

		// If the address is zero, this is meant to wrap native tokens
		if (_tokenAddress == address(0)) {
			require(msg.value == wrapAmount);
			// If the wrapping is native, ensure the amount sent to the tokenWrapper is 0
			ITokenWrapper(token).wrapForAndSendTo{value: msg.value}(
					msg.sender,
					_tokenAddress,
					0,
					address(this)
			);
		} else {
			// wrap into the token and send directly to this contract
			ITokenWrapper(token).wrapForAndSendTo{value: msg.value}(
					msg.sender,
					_tokenAddress,
					wrapAmount,
					address(this)
			);
		}
	}

	function withdrawAndUnwrap(
		address _tokenAddress,
		address _recipient,
		uint256 withdrawAmount,
		bytes memory delegatedCalldata,
		uint256 blinding,
		bytes32[] memory merkleProof,
		uint32 commitmentIndex,
		bytes32 root
	) public payable nonReentrant {
		// We first withdraw the assets and send them to `this` contract address.
		// This ensure that when we unwrap the assets, `this` contract has the
		// assets to unwrap into.
		bytes32 commitment = keccak256(abi.encodePacked(
			getChainIdType(),
			withdrawAmount,
			_recipient,
			keccak256(delegatedCalldata),
			blinding
		));
		require(_isValidMerkleProof(merkleProof, commitment, commitmentIndex, root), "Invalid Merkle Proof");
		_processWithdraw(payable(address(this)), withdrawAmount);
		nullifierHashes[commitment] = true;

		ITokenWrapper(token).unwrapAndSendTo(
			_tokenAddress,
			withdrawAmount,
			_recipient
		);
	}

	function _isValidMerkleProof(bytes32[] memory siblingPathNodes, bytes32 leaf, uint32 leafIndex, bytes32 root) internal view returns (bool) {
        bytes32 currNodeHash = leaf;
        uint32 nodeIndex = leafIndex;

        for (uint8 i = 0; i < siblingPathNodes.length; i++) {
            if (nodeIndex % 2 == 0) {
                currNodeHash = bytes32(hasher.hashLeftRight(
					uint256(currNodeHash),
					uint256(siblingPathNodes[i])
				));
            } else {
                currNodeHash = bytes32(hasher.hashLeftRight(
					uint256(siblingPathNodes[i]),
					uint256(currNodeHash)
				));
            }
            nodeIndex = nodeIndex / 2;
        }
		bool isKnownRootBool= false;
		for (uint i = 0; i < edgeList.length; i++) {
			isKnownRootBool = isKnownRootBool || isKnownNeighborRoot(edgeList[i].chainID, root);
		}
		isKnownRootBool = isKnownRootBool || isKnownRoot(root);

		require(isKnownRootBool, "Invalid root");

        return root == currNodeHash;
    }



	function wrapAndDeposit(uint256 depositAmount, uint48 destinationChainId, address recipient, bytes memory delegatedCalldata, address _tokenAddress, uint256 blinding) public payable nonReentrant {
		require(depositAmount <= maximumDepositAmount, "amount is larger than maximumDepositAmount");
		bytes32 commitment = keccak256(abi.encodePacked(
			destinationChainId,
			depositAmount,
			recipient,
			keccak256(delegatedCalldata),
			blinding
		));
		_executeWrapping(_tokenAddress, depositAmount);
		_executeInsertion(commitment);
	}

	function _executeInsertion(bytes32 commitment) internal {
		insert(commitment);
		emit NewCommitment(commitment, nextIndex - 1);
	}

	function _processWithdraw(
		address _recipient,
		uint256 withdrawAmount
	) internal override {
		uint balance = IERC20(token).balanceOf(address(this));
		if (balance >= withdrawAmount) {
			// transfer tokens when balance exists
			IERC20(token).safeTransfer(_recipient, withdrawAmount);
		} else {
			// mint tokens when not enough balance exists
			IMintableERC20(token).mint(_recipient, withdrawAmount);
		}
	}
}
