const assert = require('assert');
const TruffleAssert = require('truffle-assertions');
import { ethers, network } from 'hardhat';
import BN from 'bn.js';
import { toFixedHex, toHex, MerkleTree, MerkleProof } from '@webb-tools/sdk-core';

import { OpenVAnchor__factory } from '../../typechain';

// Typechain generated bindings for contracts
// These contracts are included in packages, so should be tested
import {
  ERC20PresetMinterPauser,
  ERC20PresetMinterPauser__factory,
  GovernedTokenWrapper as WrappedToken,
  GovernedTokenWrapper__factory as WrappedTokenFactory,
  PoseidonT3__factory
} from '../../packages/contracts/src';
import { BigNumber, BigNumberish } from 'ethers';
import { keccak256, sha3 } from 'web3-utils';
import { solidityPack } from 'ethers/lib/utils';
import { getChainIdType } from '@webb-tools/utils';

function sha3Hash (left: BigNumberish, right: BigNumberish) {
  const packed = solidityPack([ "bytes32", "bytes32"], [toFixedHex(left), toFixedHex(right)]);
  return BigNumber.from(ethers.utils.keccak256(ethers.utils.arrayify(packed)));
}

describe('Open VAnchor Contract', () => {
    let sender;
    let openVAnchorInstance;
    let token;
    let tokenDenomination = '1000000000000000000' // 1 ether
    let chainId;
    let recipient;
    beforeEach(async () => {
      const signers = await ethers.getSigners();
      const wallet = signers[0];
      sender = wallet;
      recipient = signers[1];
      chainId = getChainIdType(await sender.getChainId());
      // create token
      const tokenFactory = new ERC20PresetMinterPauser__factory(wallet);
      token = await tokenFactory.deploy('test token', 'TEST');
      await token.deployed();
      await token.mint(sender.address, '10000000000000000000000');

      const openVAnchorFactory = new OpenVAnchor__factory(wallet);
      openVAnchorInstance= await openVAnchorFactory.deploy(30, sender.address, token.address,);
      await openVAnchorInstance.deployed();
    });
   
    it('should deposit and withdraw', async () => {
      // Deposit
      await openVAnchorInstance.configureMaximumDepositLimit(BigNumber.from(10000000000),0,);
      await openVAnchorInstance.configureMinimalWithdrawalLimit(BigNumber.from(tokenDenomination).mul(1_000_000),
      0,);
      const MINTER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('MINTER_ROLE'));
      await token.grantRole(MINTER_ROLE, openVAnchorInstance.address);

      await token.approve(token.address, '1000000000000000000');

      let blinding = BigNumber.from(1010101010);
      // Deposit
      await openVAnchorInstance.wrapAndDeposit(10000, chainId, await recipient.getAddress(), BigNumber.from(0), token.address, blinding);

      // Merkle Proof Generation
      const delHash = ethers.utils.keccak256(ethers.utils.arrayify('0x00'));
      const prehashed = solidityPack([ "uint48", "uint256", "address", "bytes32", "uint256" ], [ chainId, 10000, await recipient.getAddress(), delHash, blinding]);

      // Step 1: Get Commitment
      let commitment = ethers.utils.keccak256(ethers.utils.arrayify(prehashed));
      console.log(commitment);
      
      // Step 2: Insert into Merkle Tree
      let mt = new MerkleTree(30, [], {hashFunction: sha3Hash},);
      // Step 3: Get Merkle Proof and leaf Index of commitment
      mt.insert(commitment);
      let commitmentIndex = mt.indexOf(commitment);
      console.log('commitment index', commitmentIndex);
      let merkleProofData = mt.path(commitmentIndex);
      let merkleProof = merkleProofData.pathElements;
      let root = merkleProofData.merkleRoot;

      // Withdraw
      await openVAnchorInstance.withdraw(recipient.getAddress(), 10000, BigNumber.from(0), blinding, merkleProof, commitmentIndex, toFixedHex(root, 32));
    });

    it('should not withdraw with wrong chain id', async () => {
      // Deposit
      await openVAnchorInstance.configureMaximumDepositLimit(BigNumber.from(10000000000),0,);
      await openVAnchorInstance.configureMinimalWithdrawalLimit(BigNumber.from(tokenDenomination).mul(1_000_000),
      0,);
      const MINTER_ROLE = ethers.utils.keccak256(ethers.utils.toUtf8Bytes('MINTER_ROLE'));
      await token.grantRole(MINTER_ROLE, openVAnchorInstance.address);

      await token.approve(token.address, '1000000000000000000');

      let blinding = BigNumber.from(1010101010);
      // Deposit
      //Wrong chain id
      chainId = getChainIdType(31338);
      await openVAnchorInstance.wrapAndDeposit(10000, chainId, await recipient.getAddress(), BigNumber.from(0), token.address, blinding);

      // Merkle Proof Generation
      const delHash = ethers.utils.keccak256(ethers.utils.arrayify('0x00'));
      const prehashed = solidityPack([ "uint48", "uint256", "address", "bytes32", "uint256" ], [ chainId, 10000, await recipient.getAddress(), delHash, blinding]);

      // Step 1: Get Commitment
      let commitment = ethers.utils.keccak256(ethers.utils.arrayify(prehashed));
      console.log(commitment);
      
      // Step 2: Insert into Merkle Tree
      let mt = new MerkleTree(30, [], {hashFunction: sha3Hash},);
      // Step 3: Get Merkle Proof and leaf Index of commitment
      mt.insert(commitment);
      let commitmentIndex = mt.indexOf(commitment);
      console.log('commitment index', commitmentIndex);
      let merkleProofData = mt.path(commitmentIndex);
      let merkleProof = merkleProofData.pathElements;
      let root = merkleProofData.merkleRoot;

      // Withdraw
      await TruffleAssert.reverts(openVAnchorInstance.withdraw(recipient.getAddress(), 10000, BigNumber.from(0), blinding, merkleProof, commitmentIndex, toFixedHex(root, 32)), "Invalid root");
    });
});