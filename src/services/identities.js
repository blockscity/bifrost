import Identities from "../contracts/Identities.json";
import Config from "react-native-config/index";
import Transaction from "ethereumjs-tx";
import {Wallet} from "ethers";
import {Alert} from "react-native";

export const createIdentity = (username, password) => {
    return new Promise((resolve, reject) => {
        var Web3 = require('web3');
        var web3 = new Web3();
        try {
            Wallet.fromBrainWallet(username, password).then(random => {
                web3.setProvider(new web3.providers.HttpProvider("http://127.0.0.1:8545"))
                let IdentitiesContract = web3.eth.contract(Identities.abi);
                let identities = IdentitiesContract.at("0xf04ed3ee45b5898f19d3991e31bd1a994e4e5068");
                let data = identities.createIdentity.getData(random.address, random.address);

                identities.createIdentity.estimateGas(random.address, random.address, (err, gas) => {
                    if (err) {
                        Alert.alert("error", err.toString());
                    } else {
                        let tx = new Transaction({
                            from: random.address,
                            to: Config.IDENTITES_ADDR,
                            gas: gas,
                            data: data,
                            gasLimit: web3.toHex(25000),
                            gasPrice: web3.toHex(10e9),
                        });
                        tx.sign(Buffer.from(random.privateKey.slice(2), 'hex'));
                        let serialize = tx.serialize().toString("hex");
                        console.log(Wallet.parseTransaction("0x" + serialize));
                        resolve("0x" + serialize);



                        // web3.eth.sendRawTransaction('0x' + serialize, (err, res) => {
                        //     if (err) {
                        //         console.log("err", err)
                        //     } else {
                        //         console.log("res", res);
                        //     }
                        // })
                    }
                });
            })
        } catch (e) {
            reject(e);
        }
    });

};
