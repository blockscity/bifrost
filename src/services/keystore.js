import Identities from "../contracts/Identities.json";
import Config from "react-native-config/index";
import Transaction from "ethereumjs-tx";
import {Wallet} from "ethers";
import {Alert} from "react-native";
import {keystore} from 'eth-lightwallet';


export const createKeystore = (password) => {
    return new Promise((resolve, reject) => {
        try {
            keystore.createVault({
                password: password,
                seedPhrase: keystore.generateRandomSeed(),
                hdPathString: "m/44'/60'/0'/0"
            }, function (err, ks) {
                if (err) {
                    reject(err);
                    return;
                }
                // Some methods will require providing the `pwDerivedKey`,
                // Allowing you to only decrypt private keys on an as-needed basis.
                // You can generate that value with this convenient method:
                ks.keyFromPassword(password, function (err, pwDerivedKey) {
                    if (err) {
                        reject(err);
                        return;
                    }

                    ks.generateNewAddress(pwDerivedKey, 1);
                });
                resolve(ks);
            });
        } catch (e) {
            reject(e);
        }
    });
};


export const transaction = (keystore) => {
    let Web3 = require('web3');
    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(Config.PROVIDER));
    try {
        let IdentitiesContract = web3.eth.contract(Identities.abi);
        let identities = IdentitiesContract.at(Config.IDENTITES_ADDR);
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
    } catch (e) {

    }
}
