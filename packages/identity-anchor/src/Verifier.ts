import { ethers, Signer, ContractFactory } from 'ethers';

import {
  VAnchorVerifier as VerifierContract,
} from '@webb-tools/contracts';
import { Deployer } from '@webb-tools/anchors';
import { VerifierBase } from '@webb-tools/anchors';
import { VerifierID2_2__factory, VerifierID2_16__factory, VerifierID8_16__factory, IdentityVAnchorVerifier__factory, VerifierID8_2__factory } from '@webb-tools/identity-anchor-contracts';

// This convenience wrapper class is used in tests.
// It represents a deployed contract throughout its life (e.g. maintains all verifiers)
export class IdentityVerifier extends VerifierBase {
    signer: ethers.Signer;
    contract: VerifierContract;
  
    private constructor(contract: VerifierContract, signer: ethers.Signer) {
      super(contract, signer);
      this.signer = signer;
      this.contract = contract;
    }
    public static async create2Verifier(deployer: Deployer, salt: string, signer: ethers.Signer) {
      const saltHex = ethers.utils.id(salt);
      const verifiers = await this.create2Verifiers(
        deployer,
        saltHex,
        VerifierID2_2__factory,
        VerifierID82__factory,
        VerifierID2_16__factory,
        VerifierID8_16__factory,
        signer
      );
  
      const verifier = await this.create2VAnchorVerifier(
        deployer,
        saltHex,
        IdentityVAnchorVerifier__factory,
        signer,
        verifiers
      );
      const createdVerifier = new IdentityVerifier(verifier, signer);
      return createdVerifier;
    }
  
    // Deploys a Verifier contract and all auxiliary verifiers used by this verifier
    public static async createVerifier(signer: ethers.Signer) {
      const verifiers = await this.createFactories(
        VerifierID2_2__factory,
        VerifierID8_2__factory,
        VerifierID2_16__factory,
        VerifierID8_16__factory,
        signer
      );
  
      const verifier = await this.createVAnchorVerifier(
        IdentityVAnchorVerifier__factory,
        signer,
        verifiers
      );
      const createdVerifier = new IdentityVerifier(verifier, signer);
      return createdVerifier;
    }
  }