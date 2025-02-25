/**
 * Copyright 2021-2023 Webb Technologies
 * SPDX-License-Identifier: MIT OR Apache-2.0
 */

pragma solidity ^0.8.5;

struct CommonExtData {
	address recipient;
	int256 extAmount;
	address relayer;
	uint256 fee;
	uint256 refund;
	address token;
}

/**
    @notice Public input struct for VAnchor proofs
    @param roots The roots on the VAnchor commitment trees
    @param extensionRoots The extra roots for extension VAnchors such as IdentityVAnchor
    @param inputNullifiers The nullifiers of the UTXO records
    @param outputCommitments The 2 new commitments for the join/split UTXO transaction
    @param publicAmount The public amount being deposited to this VAnchor
    @param extDataHash The external data hash for the proof verification
*/
struct PublicInputs {
	bytes roots;
	bytes extensionRoots;
	uint256[] inputNullifiers;
	uint256[2] outputCommitments;
	uint256 publicAmount;
	uint256 extDataHash;
}

/**
    @notice Auxiliary public input struct made up of deserializable values
    @param publicAssetID the public asset ID of the asset being deposited or withdrawn
	@param publicTokenID tokenID of Nft
 */
struct MASPAuxPublicInputs {
	uint256 publicAssetID;
	uint256 publicTokenID;
	uint256[10] whitelistedAssetIDs;
	uint256[2] feeInputNullifiers;
	uint256[2] feeOutputCommitments;
}

/**
    @notice External encryptions for new output commitments
 */
struct Encryptions {
	bytes encryptedOutput1;
	bytes encryptedOutput2;
}

struct SwapPublicInputs {
	bytes roots;
	uint256 aliceSpendNullifier;
	uint256 bobSpendNullifier;
	uint256 swapChainID;
	uint256 currentTimestamp;
	uint256 aliceChangeRecord;
	uint256 bobChangeRecord;
	uint256 aliceReceiveRecord;
	uint256 bobReceiveRecord;
}
