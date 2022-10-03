/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  IdentityVAnchorVerifier,
  IdentityVAnchorVerifierInterface,
} from "../IdentityVAnchorVerifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IIdentityVAnchorVerifier2_2",
        name: "_verifier_2_2",
        type: "address",
      },
      {
        internalType: "contract IIdentityVAnchorVerifier2_16",
        name: "_verifier_2_16",
        type: "address",
      },
      {
        internalType: "contract IIdentityVAnchorVerifier8_2",
        name: "_verifier_8_2",
        type: "address",
      },
      {
        internalType: "contract IIdentityVAnchorVerifier8_16",
        name: "_verifier_8_16",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "v2_16",
    outputs: [
      {
        internalType: "contract IIdentityVAnchorVerifier2_16",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v2_2",
    outputs: [
      {
        internalType: "contract IIdentityVAnchorVerifier2_2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v8_16",
    outputs: [
      {
        internalType: "contract IIdentityVAnchorVerifier8_16",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "v8_2",
    outputs: [
      {
        internalType: "contract IIdentityVAnchorVerifier8_2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[2]",
        name: "a",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2][2]",
        name: "b",
        type: "uint256[2][2]",
      },
      {
        internalType: "uint256[2]",
        name: "c",
        type: "uint256[2]",
      },
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "maxEdges",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "smallInputs",
        type: "bool",
      },
    ],
    name: "verifyProof",
    outputs: [
      {
        internalType: "bool",
        name: "r",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161092138038061092183398101604081905261002f91610082565b600080546001600160a01b039586166001600160a01b03199182161790915560018054948616948216949094179093556002805492851692841692909217909155600380549190931691161790556100f9565b6000806000806080858703121561009857600080fd5b84516100a3816100e1565b60208601519094506100b4816100e1565b60408601519093506100c5816100e1565b60608601519092506100d6816100e1565b939692955090935050565b6001600160a01b03811681146100f657600080fd5b50565b610819806101086000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632e4286861461005c57806330ba9e4d1461008c5780638041ca531461009f578063e65f86af146100c2578063f8d50636146100d5575b600080fd5b60005461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b60025461006f906001600160a01b031681565b6100b26100ad3660046104aa565b6100e8565b6040519015158152602001610083565b60035461006f906001600160a01b031681565b60015461006f906001600160a01b031681565b60008260ff16600114156101ee5781156101a15760008480602001905181019061011291906103ae565b60005460405163b9c6ea8760e01b81529192506001600160a01b03169063b9c6ea8790610149908b908b908b908790600401610694565b60206040518083038186803b15801561016157600080fd5b505afa158015610175573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101999190610619565b91505061029e565b6000848060200190518101906101b7919061042c565b60015460405163311470b360e11b81529192506001600160a01b031690636228e16690610149908b908b908b9087906004016106f1565b8260ff166007141561029a57811561024d57600084806020019051810190610216919061042c565b60025460405163311470b360e11b81529192506001600160a01b031690636228e16690610149908b908b908b9087906004016106f1565b600084806020019051810190610263919061058f565b6003546040516344a173dd60e01b81529192506001600160a01b0316906344a173dd90610149908b908b908b908790600401610742565b5060005b9695505050505050565b600082601f8301126102b957600080fd5b6102c1610793565b8083856040860111156102d357600080fd5b60005b60028110156102f55781358452602093840193909101906001016102d6565b509095945050505050565b803561030b816107d2565b919050565b600082601f83011261032157600080fd5b813567ffffffffffffffff8082111561033c5761033c6107bc565b604051601f8301601f19908116603f01168101908282118183101715610364576103646107bc565b8160405283815286602085880101111561037d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803560ff8116811461030b57600080fd5b60006101608083850312156103c257600080fd5b83601f8401126103d157600080fd5b60405181810181811067ffffffffffffffff821117156103f3576103f36107bc565b604052808483810187101561040757600080fd5b600093505b600b8410156102f55780518252600193909301926020918201910161040c565b600061032080838503121561044057600080fd5b83601f84011261044f57600080fd5b60405181810181811067ffffffffffffffff82111715610471576104716107bc565b604052808483810187101561048557600080fd5b600093505b60198410156102f55780518252600193909301926020918201910161048a565b60008060008060008061016087890312156104c457600080fd5b6104ce88886102a8565b9550604088605f8901126104e157600080fd5b6104e9610793565b80828a0160c08b018c8111156104fe57600080fd5b60005b6002811015610528576105148e846102a8565b855260209094019391850191600101610501565b508299506105368d826102a8565b9850505050505061010087013567ffffffffffffffff81111561055857600080fd5b61056489828a01610310565b935050610574610120880161039d565b91506105836101408801610300565b90509295509295509295565b60006103e08083850312156105a357600080fd5b601f84818501126105b357600080fd5b60405182810181811067ffffffffffffffff821117156105d5576105d56107bc565b60405280858481018810156105e957600080fd5b600094505b8385101561060d578051825260019490940193602091820191016105ee565b50909695505050505050565b60006020828403121561062b57600080fd5b8151610636816107d2565b9392505050565b8060005b600281101561066b57610655848351610671565b6040939093019260209190910190600101610641565b50505050565b8060005b600281101561066b578151845260209384019390910190600101610675565b61026081016106a38287610671565b6106b0604083018661063d565b6106bd60c0830185610671565b61010082018360005b600b8110156106e55781518352602092830192909101906001016106c6565b50505095945050505050565b61042081016107008287610671565b61070d604083018661063d565b61071a60c0830185610671565b61010082018360005b60198110156106e5578151835260209283019290910190600101610723565b6104e081016107518287610671565b61075e604083018661063d565b61076b60c0830185610671565b61010082018360005b601f8110156106e5578151835260209283019290910190600101610774565b6040805190810167ffffffffffffffff811182821017156107b6576107b66107bc565b60405290565b634e487b7160e01b600052604160045260246000fd5b80151581146107e057600080fd5b5056fea2646970667358221220c2240ad40b68eff09681a59938be3a315a75656d080abf93c7e72f013bb9ab5564736f6c63430008050033";

export class IdentityVAnchorVerifier__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _verifier_2_2: string,
    _verifier_2_16: string,
    _verifier_8_2: string,
    _verifier_8_16: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<IdentityVAnchorVerifier> {
    return super.deploy(
      _verifier_2_2,
      _verifier_2_16,
      _verifier_8_2,
      _verifier_8_16,
      overrides || {}
    ) as Promise<IdentityVAnchorVerifier>;
  }
  getDeployTransaction(
    _verifier_2_2: string,
    _verifier_2_16: string,
    _verifier_8_2: string,
    _verifier_8_16: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _verifier_2_2,
      _verifier_2_16,
      _verifier_8_2,
      _verifier_8_16,
      overrides || {}
    );
  }
  attach(address: string): IdentityVAnchorVerifier {
    return super.attach(address) as IdentityVAnchorVerifier;
  }
  connect(signer: Signer): IdentityVAnchorVerifier__factory {
    return super.connect(signer) as IdentityVAnchorVerifier__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): IdentityVAnchorVerifierInterface {
    return new utils.Interface(_abi) as IdentityVAnchorVerifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IdentityVAnchorVerifier {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IdentityVAnchorVerifier;
  }
}
