/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { OpenAnchorBase, OpenAnchorBaseInterface } from '../OpenAnchorBase';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'latestLeafIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'merkleRoot',
        type: 'bytes32',
      },
    ],
    name: 'EdgeAddition',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'latestLeafIndex',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'merkleRoot',
        type: 'bytes32',
      },
    ],
    name: 'EdgeUpdate',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'commitment',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'leafIndex',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'Insertion',
    type: 'event',
  },
  {
    inputs: [],
    name: 'EVM_CHAIN_ID_TYPE',
    outputs: [
      {
        internalType: 'bytes2',
        name: '',
        type: 'bytes2',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'FIELD_SIZE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ROOT_HISTORY_SIZE',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'ZERO_VALUE',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'commitments',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'maximumDepositAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'configureMaximumDepositLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'minimalWithdrawalAmount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'configureMinimalWithdrawalLimit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'currentNeighborRootIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentRootIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'edgeExistsForChain',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'edgeIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'edgeList',
    outputs: [
      {
        internalType: 'uint256',
        name: 'chainID',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'root',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'latestLeafIndex',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'srcResourceID',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'filledSubtrees',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getChainIdType',
    outputs: [
      {
        internalType: 'uint48',
        name: '',
        type: 'uint48',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastRoot',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestNeighborEdges',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'chainID',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'root',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'latestLeafIndex',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'srcResourceID',
            type: 'bytes32',
          },
        ],
        internalType: 'struct OpenLinkableAnchor.Edge[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLatestNeighborRoots',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: '',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getProposalNonce',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'handler',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_chainID',
        type: 'uint256',
      },
    ],
    name: 'hasEdge',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IHasher',
        name: '_hasher',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_left',
        type: 'bytes32',
      },
      {
        internalType: 'bytes32',
        name: '_right',
        type: 'bytes32',
      },
    ],
    name: 'hashLeftRight',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'hasher',
    outputs: [
      {
        internalType: 'contract IHasher',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_neighborChainID',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
    ],
    name: 'isKnownNeighborRoot',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
    ],
    name: 'isKnownRoot',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_nullifierHash',
        type: 'bytes32',
      },
    ],
    name: 'isSpent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_nullifierHashes',
        type: 'bytes32[]',
      },
    ],
    name: 'isSpentArray',
    outputs: [
      {
        internalType: 'bool[]',
        name: '',
        type: 'bool[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: '_roots',
        type: 'bytes32[]',
      },
    ],
    name: 'isValidRoots',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'levels',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    name: 'neighborRoots',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nextIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'nullifierHashes',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_resourceId',
        type: 'bytes32',
      },
    ],
    name: 'parseChainIdFromResourceId',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'roots',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'root',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'latestLeafindex',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_handler',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_nonce',
        type: 'uint32',
      },
    ],
    name: 'setHandler',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_root',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: '_leafIndex',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_srcResourceID',
        type: 'bytes32',
      },
    ],
    name: 'updateEdge',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

export class OpenAnchorBase__factory {
  static readonly abi = _abi;
  static createInterface(): OpenAnchorBaseInterface {
    return new utils.Interface(_abi) as OpenAnchorBaseInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OpenAnchorBase {
    return new Contract(address, _abi, signerOrProvider) as OpenAnchorBase;
  }
}
