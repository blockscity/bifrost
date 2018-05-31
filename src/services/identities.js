import Identities from "../contracts/Identities.json";
import Config from "react-native-config/index";
import {Promise, Timers} from 'bluebird';
import axios from 'axios';
import {keystore} from "eth-lightwallet";
import base58 from "bs58";
import Claims from "../contracts/Claims.json";
import {BN} from "ethereumjs-util";

export const identities = async ({keystore, derivedKey, ipfs}) => {
    let Web3 = require('web3');
    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(Config.PROVIDER));
    console.log(Config);

    try {
        let IdentitiesContract = web3.eth.contract(Identities.abi);

        let identities = IdentitiesContract.at(Config.IDENTITES_ADDR);
        let address = keystore.getAddresses()[0];

        let ClaimsContract = web3.eth.contract(Claims.abi);
        let claims = ClaimsContract.at(Config.CLAIMS_ADDR);
        const hexhash = new Buffer(base58.decode(ipfs.hash)).toString('hex');
        let claimData = claims.set.getData(address, web3.toHex("BlockCityPassport"), hexhash, {from: address});


        let data = identities.createIdentityWithCall.getData(address, address, Config.CLAIMS_ADDR, claimData, {from: address});

        let nonce = await Promise.promisify(web3.eth.getTransactionCount)(address, 'pending');
        let gasPrice = await Promise.promisify(web3.eth.getGasPrice)();
        let tx = {
            nonce,
            to: Config.IDENTITES_ADDR,
            data: web3.toHex(data),
            gasPrice: web3.toHex(gasPrice),
            from: address,
            gasLimit: web3.toHex(300000),
            gas: web3.toHex(4612388),
            value: '0x00'
        };


        let estimated = await Promise.promisify(web3.eth.estimateGas)(tx);
        tx.gasLimit = web3.toHex(new BN(estimated).mul(new BN(20, 10)).div(new BN(19, 10)));
        let signedGas = await Promise.promisify(keystore.signTransaction, {context: keystore})(tx);


        let res = await axios.post("http://127.0.0.1:8080" + "/refuels", {
            transaction: signedGas
        }, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const wait = async (cond, action, initial) => {
            console.log("wait");
            let initialValue = await initial();
            console.log("inital", initialValue);
            if (await cond(initialValue)) {
                return initialValue;
            } else {
                await new Promise(resolve => setTimeout(resolve, 1000));
                let next = await action(initialValue);
                return await wait(cond, action, () => next)
            }
        };
        console.log(res.data)

        // let receipt = await wait(v => v !== undefined && v !== null,
        //     async () => await Promise.promisify(web3.eth.getTransactionReceipt)(res.data.tx),
        //     async () => await Promise.promisify(web3.eth.getTransactionReceipt)(res.data.tx));
        // console.log(receipt);
        //
        // let event = await Promise.promisify(identities.LogIdentityCreated)([{creator: address}]).then(e => {
        //     console.log(e);
        //     return e;
        // });

        return {
            id: address,
            owner: address,
            recover: address
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
};