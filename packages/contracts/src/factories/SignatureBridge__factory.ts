/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SignatureBridge,
  SignatureBridgeInterface,
} from "../SignatureBridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialGovernor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "GovernanceOwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recovered",
        type: "address",
      },
    ],
    name: "RecoveredAddress",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "EVM_CHAIN_ID_TYPE",
    outputs: [
      {
        internalType: "bytes2",
        name: "",
        type: "bytes2",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_counts",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "_resourceIDToHandlerAddress",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "handlerAddress",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "resourceID",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "executionContextAddress",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "adminSetResourceWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "pubkey",
        type: "bytes",
      },
    ],
    name: "checkPubKey",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "executeProposalWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainIdType",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isGovernor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "isSignatureFromGovernor",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "refreshNonce",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "transferOwnershipWithSignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "publicKey",
        type: "bytes",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
    ],
    name: "transferOwnershipWithSignaturePubKey",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "verify",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805463ffffffff60a81b1916905534801561002057600080fd5b5060405161186b38038061186b83398101604081905261003f9161009d565b600080546001600160a81b0319166101006001600160a01b03848116820292909217808455604051859492909104909216917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908290a350506100cd565b6000602082840312156100af57600080fd5b81516001600160a01b03811681146100c657600080fd5b9392505050565b61178f806100dc6000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806384db809f116100ad578063a6e94c9111610071578063a6e94c911461028e578063c7af3352146102a1578063d4066f4c146102b9578063d75a0683146102cc578063f1835db71461030f57600080fd5b806384db809f146102085780638755bcad146102315780638b7e878214610244578063911005e7146102685780639d2b1ed71461027b57600080fd5b80633408e470116100f45780633408e470146101a95780634c830cbd146101b75780635c975abb146101d6578063715018a6146101ed5780637296b5d8146101f557600080fd5b80630c340a241461012657806313cb01f9146101555780631ed13d1b146101815780631eee6bc814610196575b600080fd5b60005461010090046001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b60005461016c90600160a81b900463ffffffff1681565b60405163ffffffff909116815260200161014c565b61019461018f36600461139d565b610322565b005b6101946101a43660046111a7565b610372565b60405146815260200161014c565b6101bf6104c1565b60405165ffffffffffff909116815260200161014c565b60005460ff165b604051901515815260200161014c565b61019461050f565b610194610203366004611401565b61058d565b6101386102163660046112a0565b6003602052600090815260409020546001600160a01b031681565b6101dd61023f36600461139d565b6106f3565b61024f600160f81b81565b6040516001600160f01b0319909116815260200161014c565b610194610276366004611242565b610729565b61019461028936600461133e565b6108b9565b61019461029c36600461120f565b610a6b565b60005461010090046001600160a01b031633146101dd565b6101dd6102c73660046112fc565b610b41565b6102f66102da3660046112a0565b60026020526000908152604090205467ffffffffffffffff1681565b60405167ffffffffffffffff909116815260200161014c565b6101dd61031d3660046112b9565b610b77565b8151602083012060006103358284610c6c565b6040519091506001600160a01b038216907f391f5edd7209ba797e8055bce97cab2d1a480a2849b0c7fe965c370457166dc490600090a250505050565b6040516bffffffffffffffffffffffff19606086811b821660208401526034830186905284901b166054820152606801604051602081830303815290604052805190602001208160006040518060400160405280601c815260200160008051602061173a833981519152815250905061040c81846040516020016103f79291906114a9565b604051602081830303815290604052836106f3565b6104315760405162461bcd60e51b81526004016104289061157b565b60405180910390fd5b6000868152600360205260409081902080546001600160a01b0319166001600160a01b038a81169182179092559151635c7d1b9b60e11b815260048101899052908716602482015288919063b8fa373690604401600060405180830381600087803b15801561049f57600080fd5b505af11580156104b3573d6000803e3d6000fd5b505050505050505050505050565b60408051600160f81b602082018190524660e01b6001600160e01b03198116602284015283518084036006018152602690930190935260009291610504816116d6565b60d01c935050505090565b60005461010090046001600160a01b0316331461053e5760405162461bcd60e51b815260040161042890611535565b600080546040516101009091046001600160a01b0316907f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f7908390a360008054610100600160a81b0319169055565b60005463ffffffff808416600160a81b90920416106105be5760405162461bcd60e51b8152600401610428906115ca565b6000546105d990600160a81b900463ffffffff166001611652565b63ffffffff168263ffffffff1611156106045760405162461bcd60e51b8152600401610428906115f1565b604080518082018252601c815260008051602061173a83398151915260208083019190915285518682012092519192916000916106459187918991016114df565b60408051808303601f190181528282528051602091820120908301819052925083916106a19186910160408051601f198184030181529082905261068c92916020016114c2565b604051602081830303815290604052866106f3565b6106bd5760405162461bcd60e51b815260040161042890611535565b6106c681610c90565b50506000805463ffffffff909516600160a81b0263ffffffff60a81b199095169490941790935550505050565b81516020830120600090816107088285610c6c565b60005461010090046001600160a01b03908116911614925050505b92915050565b60005463ffffffff808416600160a81b909204161061075a5760405162461bcd60e51b8152600401610428906115ca565b60005461077590600160a81b900463ffffffff166001611652565b63ffffffff168263ffffffff1611156107a05760405162461bcd60e51b8152600401610428906115f1565b60006040518060400160405280601c815260200160008051602061173a83398151915281525090506000838560405160200161080792919060e09290921b6001600160e01b031916825260601b6bffffffffffffffffffffffff1916600482015260180190565b604051602081830303815290604052805190602001209050610869828260405160200161083691815260200190565b60408051601f198184030181529082905261085492916020016114c2565b604051602081830303815290604052846106f3565b6108855760405162461bcd60e51b815260040161042890611535565b61088e85610c90565b50506000805463ffffffff909316600160a81b0263ffffffff60a81b19909316929092179091555050565b82826040516108c9929190611499565b60405180910390208160006040518060400160405280601c815260200160008051602061173a833981519152815250905061091081846040516020016103f79291906114a9565b61092c5760405162461bcd60e51b81526004016104289061157b565b36600061093c602082898b611628565b9092509050600061094d8284611688565b9050600061095f6020601a8587611628565b610968916116a6565b60d01c9050806109766104c1565b65ffffffffffff16146109cb5760405162461bcd60e51b815260206004820152601860248201527f657865637574696e67206f6e2077726f6e6720636861696e00000000000000006044820152606401610428565b60006003600084815260200190815260200160002060009054906101000a90046001600160a01b031690506000819050806001600160a01b031663e248cff2858e8e6040518463ffffffff1660e01b8152600401610a2b939291906114ff565b600060405180830381600087803b158015610a4557600080fd5b505af1158015610a59573d6000803e3d6000fd5b50505050505050505050505050505050565b60005461010090046001600160a01b03163314610a9a5760405162461bcd60e51b815260040161042890611535565b60005463ffffffff808316600160a81b9092041610610acb5760405162461bcd60e51b8152600401610428906115ca565b600054610ae690600160a81b900463ffffffff166001611652565b63ffffffff168163ffffffff161115610b115760405162461bcd60e51b8152600401610428906115f1565b610b1a82610c90565b6000805463ffffffff909216600160a81b0263ffffffff60a81b1990921691909117905550565b6000336001600160a01b03168383604051610b5d929190611499565b6040519081900390206001600160a01b0316149392505050565b6000806040518060400160405280601c815260200160008051602061173a833981519152815250905060008187604051602001610bb59291906114a9565b604051602081830303815290604052805190602001209050610be56000546001600160a01b036101009091041690565b6001600160a01b031660018288888860405160008152602001604052604051610c2a949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015610c4c573d6000803e3d6000fd5b505050602060405103516001600160a01b03161492505050949350505050565b6000806000610c7b8585610d5e565b91509150610c8881610dce565b509392505050565b6001600160a01b038116610cf85760405162461bcd60e51b815260206004820152602960248201527f476f7665726e61626c653a206e6577206f776e657220697320746865207a65726044820152686f206164647265737360b81b6064820152608401610428565b600080546040516001600160a01b038085169361010090930416917f1f323489f404e3bad762215fc05447f9a77bb7f3b630a6f08a2851b999db41f791a3600080546001600160a01b0390921661010002610100600160a81b0319909216919091179055565b600080825160411415610d955760208301516040840151606085015160001a610d8987828585610f8c565b94509450505050610dc7565b825160401415610dbf5760208301516040840151610db4868383611079565b935093505050610dc7565b506000905060025b9250929050565b6000816004811115610de257610de261170d565b1415610deb5750565b6001816004811115610dff57610dff61170d565b1415610e4d5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610428565b6002816004811115610e6157610e6161170d565b1415610eaf5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610428565b6003816004811115610ec357610ec361170d565b1415610f1c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610428565b6004816004811115610f3057610f3061170d565b1415610f895760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610428565b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115610fc35750600090506003611070565b8460ff16601b14158015610fdb57508460ff16601c14155b15610fec5750600090506004611070565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611040573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661106957600060019250925050611070565b9150600090505b94509492505050565b6000806001600160ff1b03831660ff84901c601b0161109a87828885610f8c565b935093505050935093915050565b80356001600160a01b03811681146110bf57600080fd5b919050565b60008083601f8401126110d657600080fd5b50813567ffffffffffffffff8111156110ee57600080fd5b602083019150836020828501011115610dc757600080fd5b600082601f83011261111757600080fd5b813567ffffffffffffffff8082111561113257611132611723565b604051601f8301601f19908116603f0116810190828211818310171561115a5761115a611723565b8160405283815286602085880101111561117357600080fd5b836020870160208301376000602085830101528094505050505092915050565b803563ffffffff811681146110bf57600080fd5b600080600080608085870312156111bd57600080fd5b6111c6856110a8565b9350602085013592506111db604086016110a8565b9150606085013567ffffffffffffffff8111156111f757600080fd5b61120387828801611106565b91505092959194509250565b6000806040838503121561122257600080fd5b61122b836110a8565b915061123960208401611193565b90509250929050565b60008060006060848603121561125757600080fd5b611260846110a8565b925061126e60208501611193565b9150604084013567ffffffffffffffff81111561128a57600080fd5b61129686828701611106565b9150509250925092565b6000602082840312156112b257600080fd5b5035919050565b600080600080608085870312156112cf57600080fd5b84359350602085013560ff811681146112e757600080fd5b93969395505050506040820135916060013590565b6000806020838503121561130f57600080fd5b823567ffffffffffffffff81111561132657600080fd5b611332858286016110c4565b90969095509350505050565b60008060006040848603121561135357600080fd5b833567ffffffffffffffff8082111561136b57600080fd5b611377878388016110c4565b9095509350602086013591508082111561139057600080fd5b5061129686828701611106565b600080604083850312156113b057600080fd5b823567ffffffffffffffff808211156113c857600080fd5b6113d486838701611106565b935060208501359150808211156113ea57600080fd5b506113f785828601611106565b9150509250929050565b60008060006060848603121561141657600080fd5b833567ffffffffffffffff8082111561142e57600080fd5b61143a87838801611106565b945061144860208701611193565b9350604086013591508082111561139057600080fd5b6000815160005b8181101561147f5760208185018101518683015201611465565b8181111561148e576000828601525b509290920192915050565b8183823760009101908152919050565b60006114b5828561145e565b9283525050602001919050565b60006114d76114d1838661145e565b8461145e565b949350505050565b60e083901b6001600160e01b031916815260006114d7600483018461145e565b83815260406020820152816040820152818360608301376000818301606090810191909152601f909201601f1916010192915050565b60208082526026908201527f476f7665726e61626c653a2063616c6c6572206973206e6f742074686520676f6040820152653b32b93737b960d11b606082015260800190565b6020808252602f908201527f7369676e656420627920676f7665726e6f723a204e6f742076616c696420736960408201526e3390333937b69033b7bb32b93737b960891b606082015260800190565b6020808252600d908201526c496e76616c6964206e6f6e636560981b604082015260600190565b60208082526019908201527f4e6f6e6365206d75737420696e6372656d656e74206279203100000000000000604082015260600190565b6000808585111561163857600080fd5b8386111561164557600080fd5b5050820193919092039150565b600063ffffffff80831681851680830382111561167f57634e487b7160e01b600052601160045260246000fd5b01949350505050565b8035602083101561072357600019602084900360031b1b1692915050565b6001600160d01b031981358181169160068510156116ce5780818660060360031b1b83161692505b505092915050565b805160208201516001600160d01b031980821692919060068310156117055780818460060360031b1b83161693505b505050919050565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe19457468657265756d205369676e6564204d6573736167653a0a333200000000a2646970667358221220be990bad99b9341f8ed86cdf81e780863c8e9b6da5bcfe92f3a30f3dfb6b1d8b64736f6c63430008050033";

export class SignatureBridge__factory extends ContractFactory {
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
    initialGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SignatureBridge> {
    return super.deploy(
      initialGovernor,
      overrides || {}
    ) as Promise<SignatureBridge>;
  }
  getDeployTransaction(
    initialGovernor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialGovernor, overrides || {});
  }
  attach(address: string): SignatureBridge {
    return super.attach(address) as SignatureBridge;
  }
  connect(signer: Signer): SignatureBridge__factory {
    return super.connect(signer) as SignatureBridge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SignatureBridgeInterface {
    return new utils.Interface(_abi) as SignatureBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SignatureBridge {
    return new Contract(address, _abi, signerOrProvider) as SignatureBridge;
  }
}
