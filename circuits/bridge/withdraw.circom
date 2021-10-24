pragma circom 2.0.0;

include "manyMerkleTree.circom";

// computes Poseidon(chainID, nullifier, secret)
template CommitmentHasher() {
    signal input chainID;
    signal input nullifier;
    signal input secret;
    signal output commitment; 
    signal output nullifierHash;

    component poseidon3Hasher = Hasher3();
    poseidon3Hasher.in[0] <== chainID;
    poseidon3Hasher.in[1] <== nullifier;
    poseidon3Hasher.in[2] <== secret;

    component nullifierHasher = HashLeftRight();
    nullifierHasher.left <==  nullifier;
    nullifierHasher.right <== nullifier;

    commitment <== poseidon3Hasher.hash;
    nullifierHash <== nullifierHasher.hash;
}

// Verifies that commitment that corresponds to given secret and nullifier is included in the merkle tree of deposits
template Withdraw(levels, length) {
    signal input nullifierHash;         // public
    signal input recipient;             // public - not taking part in any computations
    signal input relayer;               // public - not taking part in any computations
    signal input fee;                   // public - not taking part in any computations
    signal input refund;                // public - not taking part in any computations

    // chainID fixes a withdrawal proof to the destination since
    // this will be taken as a public input from the smart contract.
    signal input chainID;               // public 
    // the set of roots to prove membership within, provided
    // as a public input from the smart contract.
    signal input roots[length];         // public
    signal input refreshCommitment;     // public - not taking part in any computations

    signal input nullifier;             // private 
    signal input secret;                // private 
    signal input pathElements[levels];  // private
    signal input pathIndices[levels];   // private
    // the differences of the root one is proving against and
    // all the roots provided as a public input in the `roots` signal.
    signal input diffs[length];         // private

    component hasher = CommitmentHasher();
    hasher.chainID <== chainID;
    hasher.nullifier <== nullifier;
    hasher.secret <== secret;
    hasher.nullifierHash === nullifierHash;

    component tree = ManyMerkleTreeChecker(levels, length);
    tree.leaf <== hasher.commitment;
    for (var i = 0; i < levels; i++) {
        tree.pathElements[i] <== pathElements[i];
        tree.pathIndices[i] <== pathIndices[i];
    }

    // add the roots and diffs signals to the bridge circuit
    for (var i = 0; i < length; i++) {
        tree.roots[i] <== roots[i];
        tree.diffs[i] <== diffs[i];
    }

    // Add hidden signals to make sure that tampering with recipient or fee will invalidate the snark proof
    // Most likely it is not required, but it's better to stay on the safe side and it only takes 2 constraints
    // Squares are used to prevent optimizer from removing those constraints
    signal recipientSquare;
    signal feeSquare;
    signal relayerSquare;
    signal refundSquare;
    signal refreshCommitmentSquare;

    recipientSquare <== recipient * recipient;
    feeSquare <== fee * fee;
    relayerSquare <== relayer * relayer;
    refundSquare <== refund * refund;
    refreshCommitmentSquare <== refreshCommitment * refreshCommitment;
}
