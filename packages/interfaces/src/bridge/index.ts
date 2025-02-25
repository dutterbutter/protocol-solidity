import { ethers } from 'ethers';
import { IVAnchor } from '..';
import { IBridgeSide } from '../IBridgeSide';

// Deployer config matches the chainId to the signer for that chain
export type DeployerConfig = Record<number, ethers.Wallet>;

// Initial Governor config the chainId to the initial governor for that chain
export type GovernorWithNonce = {
  address: string;
  nonce: number;
};
/**
 * The governor config is a record of chainId => governor eth address
 * or chainId => {governor: eth address, nonce: number}, where the nonce is the
 * nonce of the governor at the time of deployment. Nonce is zero if not specified.
 **/
export type GovernorConfig = Record<number, string | GovernorWithNonce>;

export type AnchorIdentifier = {
  anchorSize?: ethers.BigNumberish;
  chainId: number;
};

export type ExistingAssetInput = {
  // A record of chainId => address
  asset: Record<number, string[]>;
  anchorSizes: ethers.BigNumberish[];
};

export type Proposal = {
  data: string;
  dataHash: string;
  resourceId: string;
  chainId: number;
  leafIndex: number;
};

// Users define an input for a completely new bridge
export type BridgeInput = {
  // The tokens and anchors which should be supported after deploying from this bridge input
  anchorInputs: ExistingAssetInput;

  // The IDs of the chains to deploy to
  chainIDs: number[];
};

export type BridgeConfig = {
  // The addresses of tokens available to be transferred over this bridge config
  // chainId => FungibleTokenWrapperAddress
  webbTokenAddresses: Map<number, string>;

  // The addresses of the anchors for the FungibleTokenWrapper
  // {anchorIdentifier} => anchorAddress
  anchors: Map<string, IVAnchor>;

  // The addresses of the Bridge contracts (bridgeSides) to interact with
  bridgeSides: Map<number, IBridgeSide>;
};
