export default {
    "contractName": "Claims",
    "abi": [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "subject",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "value",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "updatedAt",
                    "type": "uint256"
                }
            ],
            "name": "Set",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "subject",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "indexed": false,
                    "name": "updatedAt",
                    "type": "uint256"
                }
            ],
            "name": "Unset",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "subject",
                    "type": "address"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                },
                {
                    "name": "value",
                    "type": "bytes32"
                }
            ],
            "name": "set",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "name": "subject",
                    "type": "address"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "name": "subject",
                    "type": "address"
                },
                {
                    "name": "key",
                    "type": "bytes32"
                }
            ],
            "name": "unset",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ],
    "bytecode": "0x608060405234801561001057600080fd5b506105c3806100206000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631ed603611461005c5780634de97112146100cd578063bdf285411461015a575b600080fd5b34801561006857600080fd5b506100cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356000191690602001909291905050506101b9565b005b3480156100d957600080fd5b5061013c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356000191690602001909291905050506103db565b60405180826000191660001916815260200191505060405180910390f35b34801561016657600080fd5b506101b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803560001916906020019092919050505061047b565b005b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061021e57508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561022957600080fd5b60006001026000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083600019166000191681526020019081526020016000205460001916141515156102d457600080fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082600019166000191681526020019081526020016000206000905580600019168273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ffbe6c1eb83ae9832f295d31b9250bfdc8b6d89d4dac56c4d33e92a6b24a3ed87426040518082815260200191505060405180910390a4505050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008460001916600019168152602001908152602001600020816000191690555081600019168373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fceeccc5e2ccf173b1bb6c22d83c5f568380875ae260d433d0885606b8d4a877084426040518083600019166000191681526020018281526020019250505060405180910390a45050505600a165627a7a723058205a33355335aa92a884541ec4f6d9b1f70bde0e04952c6f464a59e5c53596ba5b0029",
    "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680631ed603611461005c5780634de97112146100cd578063bdf285411461015a575b600080fd5b34801561006857600080fd5b506100cb600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356000191690602001909291905050506101b9565b005b3480156100d957600080fd5b5061013c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080356000191690602001909291905050506103db565b60405180826000191660001916815260200191505060405180910390f35b34801561016657600080fd5b506101b7600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035600019169060200190929190803560001916906020019092919050505061047b565b005b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061021e57508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b151561022957600080fd5b60006001026000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083600019166000191681526020019081526020016000205460001916141515156102d457600080fd5b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082600019166000191681526020019081526020016000206000905580600019168273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167ffbe6c1eb83ae9832f295d31b9250bfdc8b6d89d4dac56c4d33e92a6b24a3ed87426040518082815260200191505060405180910390a4505050565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083600019166000191681526020019081526020016000205490509392505050565b806000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008460001916600019168152602001908152602001600020816000191690555081600019168373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fceeccc5e2ccf173b1bb6c22d83c5f568380875ae260d433d0885606b8d4a877084426040518083600019166000191681526020018281526020019250505060405180910390a45050505600a165627a7a723058205a33355335aa92a884541ec4f6d9b1f70bde0e04952c6f464a59e5c53596ba5b0029",
    "sourceMap": "26:1034:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;26:1034:0;;;;;;;",
    "deployedSourceMap": "26:1034:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;770:288;;8:9:-1;5:2;;;30:1;27;20:12;5:2;770:288:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;619:145;;8:9:-1;5:2;;;30:1;27;20:12;5:2;619:145:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;434:178;;8:9:-1;5:2;;;30:1;27;20:12;5:2;434:178:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;770:288;870:6;856:20;;:10;:20;;;:45;;;;894:7;880:21;;:10;:21;;;856:45;848:54;;;;;;;;952:1;920:33;;:6;:14;927:6;920:14;;;;;;;;;;;;;;;:23;935:7;920:23;;;;;;;;;;;;;;;:28;944:3;920:28;;;;;;;;;;;;;;;;;;:33;;;;;912:42;;;;;;;;972:6;:14;979:6;972:14;;;;;;;;;;;;;;;:23;987:7;972:23;;;;;;;;;;;;;;;:28;996:3;972:28;;;;;;;;;;;;;;;;;965:35;;;1042:3;1015:36;;;1033:7;1015:36;;1021:10;1015:36;;;1047:3;1015:36;;;;;;;;;;;;;;;;;;770:288;;;:::o;619:145::-;703:7;729:6;:14;736:6;729:14;;;;;;;;;;;;;;;:23;744:7;729:23;;;;;;;;;;;;;;;:28;753:3;729:28;;;;;;;;;;;;;;;;;;722:35;;619:145;;;;;:::o;434:178::-;544:5;509:6;:18;516:10;509:18;;;;;;;;;;;;;;;:27;528:7;509:27;;;;;;;;;;;;;;;:32;537:3;509:32;;;;;;;;;;;;;;;;;:40;;;;;;;589:3;564:41;;;580:7;564:41;;568:10;564:41;;;594:5;601:3;564:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;434:178;;;:::o",
    "source": "pragma solidity ^0.4.23;\n\ncontract Claims {\n    mapping(address => mapping(address => mapping(bytes32 => bytes32))) claims;\n\n    event Set(\n        address indexed issuer,\n        address indexed subject,\n        bytes32 indexed key,\n        bytes32 value,\n        uint updatedAt\n    );\n\n    event Unset(\n        address indexed issuer,\n        address indexed subject,\n        bytes32 indexed key,\n        uint updatedAt\n    );\n\n    function set(address subject, bytes32 key, bytes32 value) public {\n        claims[msg.sender][subject][key] = value;\n        emit Set(msg.sender, subject, key, value, now);\n    }\n\n\n    function get(address issuer, address subject, bytes32 key) public constant returns (bytes32) {\n        return claims[issuer][subject][key];\n    }\n\n    function unset(address issuer, address subject, bytes32 key) public {\n        require(msg.sender == issuer || msg.sender == subject);\n        require(claims[issuer][subject][key] != 0);\n\n        delete claims[issuer][subject][key];\n        emit Unset(msg.sender, subject, key, now);\n    }\n}",
    "sourcePath": "/workspace/6c/startup/claims/contracts/Claims.sol",
    "ast": {
        "absolutePath": "/workspace/6c/startup/claims/contracts/Claims.sol",
        "exportedSymbols": {
            "Claims": [
                133
            ]
        },
        "id": 134,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".23"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:0"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 133,
                "linearizedBaseContracts": [
                    133
                ],
                "name": "Claims",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 9,
                        "name": "claims",
                        "nodeType": "VariableDeclaration",
                        "scope": 133,
                        "src": "48:74:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                        },
                        "typeName": {
                            "id": 8,
                            "keyType": {
                                "id": 2,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "56:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "48:67:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                            },
                            "valueType": {
                                "id": 7,
                                "keyType": {
                                    "id": 3,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "75:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "67:47:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                },
                                "valueType": {
                                    "id": 6,
                                    "keyType": {
                                        "id": 4,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "94:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "86:27:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                        "typeString": "mapping(bytes32 => bytes32)"
                                    },
                                    "valueType": {
                                        "id": 5,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "105:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 21,
                        "name": "Set",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 20,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11,
                                    "indexed": true,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "148:22:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "148:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 13,
                                    "indexed": true,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "180:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "180:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15,
                                    "indexed": true,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "213:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 14,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "213:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 17,
                                    "indexed": false,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "242:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 16,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "242:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 19,
                                    "indexed": false,
                                    "name": "updatedAt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "265:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "265:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "138:147:0"
                        },
                        "src": "129:157:0"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 31,
                        "name": "Unset",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 30,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23,
                                    "indexed": true,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "313:22:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "313:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25,
                                    "indexed": true,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "345:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "345:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 27,
                                    "indexed": true,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "378:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 26,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "378:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 29,
                                    "indexed": false,
                                    "name": "updatedAt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "407:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 28,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "407:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "303:124:0"
                        },
                        "src": "292:136:0"
                    },
                    {
                        "body": {
                            "id": 60,
                            "nodeType": "Block",
                            "src": "499:113:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 49,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 40,
                                                        "name": "claims",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9,
                                                        "src": "509:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                        }
                                                    },
                                                    "id": 45,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 41,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "516:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 42,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "516:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "509:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                    }
                                                },
                                                "id": 46,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 43,
                                                    "name": "subject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 33,
                                                    "src": "528:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "509:27:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                    "typeString": "mapping(bytes32 => bytes32)"
                                                }
                                            },
                                            "id": 47,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 44,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "537:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "509:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 48,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37,
                                            "src": "544:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "509:40:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 50,
                                    "nodeType": "ExpressionStatement",
                                    "src": "509:40:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 52,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 205,
                                                    "src": "568:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 53,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "568:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 54,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 33,
                                                "src": "580:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 55,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "589:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 56,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37,
                                                "src": "594:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 57,
                                                "name": "now",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 207,
                                                "src": "601:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 51,
                                            "name": "Set",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21,
                                            "src": "564:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_bytes32_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,bytes32,bytes32,uint256)"
                                            }
                                        },
                                        "id": 58,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "564:41:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 59,
                                    "nodeType": "EmitStatement",
                                    "src": "559:46:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 61,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "set",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 38,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 33,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "447:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 32,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "464:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 34,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "464:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 37,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "477:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 36,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "477:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "446:45:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 39,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "499:0:0"
                        },
                        "scope": 133,
                        "src": "434:178:0",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 80,
                            "nodeType": "Block",
                            "src": "712:52:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 72,
                                                    "name": "claims",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9,
                                                    "src": "729:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                        "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                    }
                                                },
                                                "id": 74,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 73,
                                                    "name": "issuer",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 63,
                                                    "src": "736:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "729:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                    "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                }
                                            },
                                            "id": 76,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 75,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 65,
                                                "src": "744:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "729:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                "typeString": "mapping(bytes32 => bytes32)"
                                            }
                                        },
                                        "id": 78,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 77,
                                            "name": "key",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67,
                                            "src": "753:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "729:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 71,
                                    "id": 79,
                                    "nodeType": "Return",
                                    "src": "722:35:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 81,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "get",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 68,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 63,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "632:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 62,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "632:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 65,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "648:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 64,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "648:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "665:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 66,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "631:46:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 71,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "703:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 69,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "703:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "702:9:0"
                        },
                        "scope": 133,
                        "src": "619:145:0",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 131,
                            "nodeType": "Block",
                            "src": "838:220:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 99,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 94,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 91,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "856:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 92,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "856:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 93,
                                                        "name": "issuer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 83,
                                                        "src": "870:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "856:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "||",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 98,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 95,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "880:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 96,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "880:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 97,
                                                        "name": "subject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 85,
                                                        "src": "894:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "880:21:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "856:45:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 90,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                208,
                                                209
                                            ],
                                            "referencedDeclaration": 208,
                                            "src": "848:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "848:54:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 101,
                                    "nodeType": "ExpressionStatement",
                                    "src": "848:54:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                "id": 111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 103,
                                                                "name": "claims",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9,
                                                                "src": "920:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                                    "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                                }
                                                            },
                                                            "id": 105,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 104,
                                                                "name": "issuer",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 83,
                                                                "src": "927:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "920:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                                "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                            }
                                                        },
                                                        "id": 107,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 106,
                                                            "name": "subject",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 85,
                                                            "src": "935:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "920:23:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "mapping(bytes32 => bytes32)"
                                                        }
                                                    },
                                                    "id": 109,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 108,
                                                        "name": "key",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 87,
                                                        "src": "944:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "920:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 110,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "952:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "920:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 102,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                208,
                                                209
                                            ],
                                            "referencedDeclaration": 208,
                                            "src": "912:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "912:42:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 113,
                                    "nodeType": "ExpressionStatement",
                                    "src": "912:42:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 121,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "965:35:0",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 114,
                                                        "name": "claims",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9,
                                                        "src": "972:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                        }
                                                    },
                                                    "id": 116,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 115,
                                                        "name": "issuer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 83,
                                                        "src": "979:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "972:14:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                    }
                                                },
                                                "id": 118,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 117,
                                                    "name": "subject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 85,
                                                    "src": "987:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "972:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                    "typeString": "mapping(bytes32 => bytes32)"
                                                }
                                            },
                                            "id": 120,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 119,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "996:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "972:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 122,
                                    "nodeType": "ExpressionStatement",
                                    "src": "965:35:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 124,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 205,
                                                    "src": "1021:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 125,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "1021:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 126,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 85,
                                                "src": "1033:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "1042:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "now",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 207,
                                                "src": "1047:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 123,
                                            "name": "Unset",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "1015:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,bytes32,uint256)"
                                            }
                                        },
                                        "id": 129,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1015:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 130,
                                    "nodeType": "EmitStatement",
                                    "src": "1010:41:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 132,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "unset",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 88,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 83,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "785:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 82,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "785:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 85,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "801:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 84,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "801:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 87,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "818:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 86,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "818:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "784:46:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 89,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "838:0:0"
                        },
                        "scope": 133,
                        "src": "770:288:0",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 134,
                "src": "26:1034:0"
            }
        ],
        "src": "0:1060:0"
    },
    "legacyAST": {
        "absolutePath": "/workspace/6c/startup/claims/contracts/Claims.sol",
        "exportedSymbols": {
            "Claims": [
                133
            ]
        },
        "id": 134,
        "nodeType": "SourceUnit",
        "nodes": [
            {
                "id": 1,
                "literals": [
                    "solidity",
                    "^",
                    "0.4",
                    ".23"
                ],
                "nodeType": "PragmaDirective",
                "src": "0:24:0"
            },
            {
                "baseContracts": [],
                "contractDependencies": [],
                "contractKind": "contract",
                "documentation": null,
                "fullyImplemented": true,
                "id": 133,
                "linearizedBaseContracts": [
                    133
                ],
                "name": "Claims",
                "nodeType": "ContractDefinition",
                "nodes": [
                    {
                        "constant": false,
                        "id": 9,
                        "name": "claims",
                        "nodeType": "VariableDeclaration",
                        "scope": 133,
                        "src": "48:74:0",
                        "stateVariable": true,
                        "storageLocation": "default",
                        "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                        },
                        "typeName": {
                            "id": 8,
                            "keyType": {
                                "id": 2,
                                "name": "address",
                                "nodeType": "ElementaryTypeName",
                                "src": "56:7:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                }
                            },
                            "nodeType": "Mapping",
                            "src": "48:67:0",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                            },
                            "valueType": {
                                "id": 7,
                                "keyType": {
                                    "id": 3,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "75:7:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "67:47:0",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                    "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                },
                                "valueType": {
                                    "id": 6,
                                    "keyType": {
                                        "id": 4,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "94:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "nodeType": "Mapping",
                                    "src": "86:27:0",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                        "typeString": "mapping(bytes32 => bytes32)"
                                    },
                                    "valueType": {
                                        "id": 5,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "105:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    }
                                }
                            }
                        },
                        "value": null,
                        "visibility": "internal"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 21,
                        "name": "Set",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 20,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 11,
                                    "indexed": true,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "148:22:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 10,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "148:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 13,
                                    "indexed": true,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "180:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 12,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "180:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 15,
                                    "indexed": true,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "213:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 14,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "213:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 17,
                                    "indexed": false,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "242:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 16,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "242:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 19,
                                    "indexed": false,
                                    "name": "updatedAt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 21,
                                    "src": "265:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 18,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "265:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "138:147:0"
                        },
                        "src": "129:157:0"
                    },
                    {
                        "anonymous": false,
                        "documentation": null,
                        "id": 31,
                        "name": "Unset",
                        "nodeType": "EventDefinition",
                        "parameters": {
                            "id": 30,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 23,
                                    "indexed": true,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "313:22:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 22,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "313:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 25,
                                    "indexed": true,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "345:23:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 24,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "345:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 27,
                                    "indexed": true,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "378:19:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 26,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "378:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 29,
                                    "indexed": false,
                                    "name": "updatedAt",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 31,
                                    "src": "407:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 28,
                                        "name": "uint",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "407:4:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "303:124:0"
                        },
                        "src": "292:136:0"
                    },
                    {
                        "body": {
                            "id": 60,
                            "nodeType": "Block",
                            "src": "499:113:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 49,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "leftHandSide": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 40,
                                                        "name": "claims",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9,
                                                        "src": "509:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                        }
                                                    },
                                                    "id": 45,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 41,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "516:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 42,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "516:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "509:18:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                    }
                                                },
                                                "id": 46,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 43,
                                                    "name": "subject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 33,
                                                    "src": "528:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "509:27:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                    "typeString": "mapping(bytes32 => bytes32)"
                                                }
                                            },
                                            "id": 47,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 44,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "537:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "509:32:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "nodeType": "Assignment",
                                        "operator": "=",
                                        "rightHandSide": {
                                            "argumentTypes": null,
                                            "id": 48,
                                            "name": "value",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 37,
                                            "src": "544:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "src": "509:40:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "id": 50,
                                    "nodeType": "ExpressionStatement",
                                    "src": "509:40:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 52,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 205,
                                                    "src": "568:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 53,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "568:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 54,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 33,
                                                "src": "580:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 55,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 35,
                                                "src": "589:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 56,
                                                "name": "value",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 37,
                                                "src": "594:5:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 57,
                                                "name": "now",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 207,
                                                "src": "601:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 51,
                                            "name": "Set",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 21,
                                            "src": "564:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_bytes32_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,bytes32,bytes32,uint256)"
                                            }
                                        },
                                        "id": 58,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "564:41:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 59,
                                    "nodeType": "EmitStatement",
                                    "src": "559:46:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 61,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "set",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 38,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 33,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "447:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 32,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "447:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 35,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "464:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 34,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "464:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 37,
                                    "name": "value",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 61,
                                    "src": "477:13:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 36,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "477:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "446:45:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 39,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "499:0:0"
                        },
                        "scope": 133,
                        "src": "434:178:0",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 80,
                            "nodeType": "Block",
                            "src": "712:52:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "baseExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "id": 72,
                                                    "name": "claims",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 9,
                                                    "src": "729:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                        "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                    }
                                                },
                                                "id": 74,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 73,
                                                    "name": "issuer",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 63,
                                                    "src": "736:6:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "729:14:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                    "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                }
                                            },
                                            "id": 76,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 75,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 65,
                                                "src": "744:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "nodeType": "IndexAccess",
                                            "src": "729:23:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                "typeString": "mapping(bytes32 => bytes32)"
                                            }
                                        },
                                        "id": 78,
                                        "indexExpression": {
                                            "argumentTypes": null,
                                            "id": 77,
                                            "name": "key",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 67,
                                            "src": "753:3:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "isConstant": false,
                                        "isLValue": true,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "IndexAccess",
                                        "src": "729:28:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "functionReturnParameters": 71,
                                    "id": 79,
                                    "nodeType": "Return",
                                    "src": "722:35:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 81,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": true,
                        "modifiers": [],
                        "name": "get",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 68,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 63,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "632:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 62,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "632:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 65,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "648:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 64,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "648:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 67,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "665:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 66,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "665:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "631:46:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 71,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 70,
                                    "name": "",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 81,
                                    "src": "703:7:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 69,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "703:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "702:9:0"
                        },
                        "scope": 133,
                        "src": "619:145:0",
                        "stateMutability": "view",
                        "superFunction": null,
                        "visibility": "public"
                    },
                    {
                        "body": {
                            "id": 131,
                            "nodeType": "Block",
                            "src": "838:220:0",
                            "statements": [
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                },
                                                "id": 99,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 94,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 91,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "856:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 92,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "856:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 93,
                                                        "name": "issuer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 83,
                                                        "src": "870:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "856:20:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "||",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "commonType": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    },
                                                    "id": 98,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "argumentTypes": null,
                                                        "expression": {
                                                            "argumentTypes": null,
                                                            "id": 95,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 205,
                                                            "src": "880:3:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 96,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": null,
                                                        "src": "880:10:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "argumentTypes": null,
                                                        "id": 97,
                                                        "name": "subject",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 85,
                                                        "src": "894:7:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "src": "880:21:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                "src": "856:45:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 90,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                208,
                                                209
                                            ],
                                            "referencedDeclaration": 208,
                                            "src": "848:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 100,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "848:54:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 101,
                                    "nodeType": "ExpressionStatement",
                                    "src": "848:54:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "commonType": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                "id": 111,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "baseExpression": {
                                                            "argumentTypes": null,
                                                            "baseExpression": {
                                                                "argumentTypes": null,
                                                                "id": 103,
                                                                "name": "claims",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 9,
                                                                "src": "920:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                                    "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                                }
                                                            },
                                                            "id": 105,
                                                            "indexExpression": {
                                                                "argumentTypes": null,
                                                                "id": 104,
                                                                "name": "issuer",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 83,
                                                                "src": "927:6:0",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "920:14:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                                "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                            }
                                                        },
                                                        "id": 107,
                                                        "indexExpression": {
                                                            "argumentTypes": null,
                                                            "id": 106,
                                                            "name": "subject",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 85,
                                                            "src": "935:7:0",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address",
                                                                "typeString": "address"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "920:23:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                            "typeString": "mapping(bytes32 => bytes32)"
                                                        }
                                                    },
                                                    "id": 109,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 108,
                                                        "name": "key",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 87,
                                                        "src": "944:3:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "920:28:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "!=",
                                                "rightExpression": {
                                                    "argumentTypes": null,
                                                    "hexValue": "30",
                                                    "id": 110,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "number",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "952:1:0",
                                                    "subdenomination": null,
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_rational_0_by_1",
                                                        "typeString": "int_const 0"
                                                    },
                                                    "value": "0"
                                                },
                                                "src": "920:33:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_bool",
                                                    "typeString": "bool"
                                                }
                                            ],
                                            "id": 102,
                                            "name": "require",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [
                                                208,
                                                209
                                            ],
                                            "referencedDeclaration": 208,
                                            "src": "912:7:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                "typeString": "function (bool) pure"
                                            }
                                        },
                                        "id": 112,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "912:42:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 113,
                                    "nodeType": "ExpressionStatement",
                                    "src": "912:42:0"
                                },
                                {
                                    "expression": {
                                        "argumentTypes": null,
                                        "id": 121,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "lValueRequested": false,
                                        "nodeType": "UnaryOperation",
                                        "operator": "delete",
                                        "prefix": true,
                                        "src": "965:35:0",
                                        "subExpression": {
                                            "argumentTypes": null,
                                            "baseExpression": {
                                                "argumentTypes": null,
                                                "baseExpression": {
                                                    "argumentTypes": null,
                                                    "baseExpression": {
                                                        "argumentTypes": null,
                                                        "id": 114,
                                                        "name": "claims",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 9,
                                                        "src": "972:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$_$",
                                                            "typeString": "mapping(address => mapping(address => mapping(bytes32 => bytes32)))"
                                                        }
                                                    },
                                                    "id": 116,
                                                    "indexExpression": {
                                                        "argumentTypes": null,
                                                        "id": 115,
                                                        "name": "issuer",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 83,
                                                        "src": "979:6:0",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address",
                                                            "typeString": "address"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "972:14:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_mapping$_t_address_$_t_mapping$_t_bytes32_$_t_bytes32_$_$",
                                                        "typeString": "mapping(address => mapping(bytes32 => bytes32))"
                                                    }
                                                },
                                                "id": 118,
                                                "indexExpression": {
                                                    "argumentTypes": null,
                                                    "id": 117,
                                                    "name": "subject",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 85,
                                                    "src": "987:7:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address",
                                                        "typeString": "address"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "nodeType": "IndexAccess",
                                                "src": "972:23:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_mapping$_t_bytes32_$_t_bytes32_$",
                                                    "typeString": "mapping(bytes32 => bytes32)"
                                                }
                                            },
                                            "id": 120,
                                            "indexExpression": {
                                                "argumentTypes": null,
                                                "id": 119,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "996:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            "isConstant": false,
                                            "isLValue": true,
                                            "isPure": false,
                                            "lValueRequested": true,
                                            "nodeType": "IndexAccess",
                                            "src": "972:28:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes32",
                                                "typeString": "bytes32"
                                            }
                                        },
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 122,
                                    "nodeType": "ExpressionStatement",
                                    "src": "965:35:0"
                                },
                                {
                                    "eventCall": {
                                        "argumentTypes": null,
                                        "arguments": [
                                            {
                                                "argumentTypes": null,
                                                "expression": {
                                                    "argumentTypes": null,
                                                    "id": 124,
                                                    "name": "msg",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 205,
                                                    "src": "1021:3:0",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_magic_message",
                                                        "typeString": "msg"
                                                    }
                                                },
                                                "id": 125,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "sender",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": null,
                                                "src": "1021:10:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 126,
                                                "name": "subject",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 85,
                                                "src": "1033:7:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 127,
                                                "name": "key",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 87,
                                                "src": "1042:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                }
                                            },
                                            {
                                                "argumentTypes": null,
                                                "id": 128,
                                                "name": "now",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 207,
                                                "src": "1047:3:0",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            }
                                        ],
                                        "expression": {
                                            "argumentTypes": [
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_address",
                                                    "typeString": "address"
                                                },
                                                {
                                                    "typeIdentifier": "t_bytes32",
                                                    "typeString": "bytes32"
                                                },
                                                {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            ],
                                            "id": 123,
                                            "name": "Unset",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 31,
                                            "src": "1015:5:0",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$_t_bytes32_$_t_uint256_$returns$__$",
                                                "typeString": "function (address,address,bytes32,uint256)"
                                            }
                                        },
                                        "id": 129,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "1015:36:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_tuple$__$",
                                            "typeString": "tuple()"
                                        }
                                    },
                                    "id": 130,
                                    "nodeType": "EmitStatement",
                                    "src": "1010:41:0"
                                }
                            ]
                        },
                        "documentation": null,
                        "id": 132,
                        "implemented": true,
                        "isConstructor": false,
                        "isDeclaredConst": false,
                        "modifiers": [],
                        "name": "unset",
                        "nodeType": "FunctionDefinition",
                        "parameters": {
                            "id": 88,
                            "nodeType": "ParameterList",
                            "parameters": [
                                {
                                    "constant": false,
                                    "id": 83,
                                    "name": "issuer",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "785:14:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 82,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "785:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 85,
                                    "name": "subject",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "801:15:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    },
                                    "typeName": {
                                        "id": 84,
                                        "name": "address",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "801:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 87,
                                    "name": "key",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 132,
                                    "src": "818:11:0",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes32",
                                        "typeString": "bytes32"
                                    },
                                    "typeName": {
                                        "id": 86,
                                        "name": "bytes32",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "818:7:0",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes32",
                                            "typeString": "bytes32"
                                        }
                                    },
                                    "value": null,
                                    "visibility": "internal"
                                }
                            ],
                            "src": "784:46:0"
                        },
                        "payable": false,
                        "returnParameters": {
                            "id": 89,
                            "nodeType": "ParameterList",
                            "parameters": [],
                            "src": "838:0:0"
                        },
                        "scope": 133,
                        "src": "770:288:0",
                        "stateMutability": "nonpayable",
                        "superFunction": null,
                        "visibility": "public"
                    }
                ],
                "scope": 134,
                "src": "26:1034:0"
            }
        ],
        "src": "0:1060:0"
    },
    "compiler": {
        "name": "solc",
        "version": "0.4.24+commit.e67f0147.Emscripten.clang"
    },
    "networks": {
        "1527134935724": {
            "events": {},
            "links": {},
            "address": "0x10183bc97b8b0a0b982294c28089fc407115ff32",
            "transactionHash": "0x4d6f085f39d22dac00533c866a90068260e2e015a6ee9d7233a3967caff92ad4"
        }
    },
    "schemaVersion": "2.0.0",
    "updatedAt": "2018-05-24T04:11:21.893Z"
}