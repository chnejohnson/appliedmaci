/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Election, ElectionInterface } from "../Election";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_coordinator",
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
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "coordinator",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "getVoiceCredits",
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
    name: "owner",
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
        name: "",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
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
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161097438038061097483398181016040528101906100329190610144565b600061004261012760201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506101b6565b600033905090565b60008151905061013e8161019f565b92915050565b60006020828403121561015657600080fd5b60006101648482850161012f565b91505092915050565b60006101788261017f565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6101a88161016d565b81146101b357600080fd5b50565b6107af806101c56000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630a0090971461006757806324b8fbf614610085578063715018a6146100a15780638da5cb5b146100ab578063b36543a9146100c9578063f2fde38b146100f9575b600080fd5b61006f610115565b60405161007c9190610637565b60405180910390f35b61009f600480360381019061009a919061051f565b61013b565b005b6100a961013f565b005b6100b3610292565b6040516100c09190610637565b60405180910390f35b6100e360048036038101906100de919061051f565b6102bb565b6040516100f09190610692565b60405180910390f35b610113600480360381019061010e91906104f6565b6102c3565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b5050565b610147610485565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146101d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101cb90610672565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600092915050565b6102cb610485565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610358576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034f90610672565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156103c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103bf90610652565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600033905090565b60008135905061049c81610762565b92915050565b600082601f8301126104b357600080fd5b81356104c66104c1826106da565b6106ad565b915080825260208301602083018583830111156104e257600080fd5b6104ed838284610753565b50505092915050565b60006020828403121561050857600080fd5b60006105168482850161048d565b91505092915050565b6000806040838503121561053257600080fd5b60006105408582860161048d565b925050602083013567ffffffffffffffff81111561055d57600080fd5b610569858286016104a2565b9150509250929050565b61057c81610717565b82525050565b600061058f602683610706565b91507f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008301527f64647265737300000000000000000000000000000000000000000000000000006020830152604082019050919050565b60006105f5602083610706565b91507f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726000830152602082019050919050565b61063181610749565b82525050565b600060208201905061064c6000830184610573565b92915050565b6000602082019050818103600083015261066b81610582565b9050919050565b6000602082019050818103600083015261068b816105e8565b9050919050565b60006020820190506106a76000830184610628565b92915050565b6000604051905081810181811067ffffffffffffffff821117156106d057600080fd5b8060405250919050565b600067ffffffffffffffff8211156106f157600080fd5b601f19601f8301169050602081019050919050565b600082825260208201905092915050565b600061072282610729565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b61076b81610717565b811461077657600080fd5b5056fea264697066735822122039273d6e78cd93ed818624b4eb1891268f640cc3545f06f1623bcb704f9fb84464736f6c634300060c0033";

export class Election__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _coordinator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Election> {
    return super.deploy(_coordinator, overrides || {}) as Promise<Election>;
  }
  getDeployTransaction(
    _coordinator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_coordinator, overrides || {});
  }
  attach(address: string): Election {
    return super.attach(address) as Election;
  }
  connect(signer: Signer): Election__factory {
    return super.connect(signer) as Election__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ElectionInterface {
    return new utils.Interface(_abi) as ElectionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Election {
    return new Contract(address, _abi, signerOrProvider) as Election;
  }
}
