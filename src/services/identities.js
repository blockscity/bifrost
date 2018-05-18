import Identities from "../contracts/Identities.json";
import Config from "react-native-config/index";
import {Promise} from 'bluebird';
import axios from 'axios';

export const identities = async ({keystore, derivedKey}) => {
    let Web3 = require('web3');
    let web3 = new Web3();

    try {
        web3.setProvider(new web3.providers.HttpProvider(Config.PROVIDER));
        let IdentitiesContract = web3.eth.contract(Identities.abi);
        let identities = IdentitiesContract.at(Config.IDENTITES_ADDR);
        let address = keystore.getAddresses()[0];
        let data = identities.createIdentity.getData(address, address);

        let gas = await Promise.promisify(identities.createIdentity.estimateGas)(address, address);
        let transaction = await Promise.promisify(keystore.signTransaction, {context: keystore})({
            from: address,
            to: Config.IDENTITES_ADDR,
            gas: gas,
            data: data,
            gasLimit: web3.toHex(25000),
            gasPrice: web3.toHex(10e9),
        });

        // let res = await axios.post(Config.GAS_STATION + "/refuels", {
        //     transaction: transaction
        // }, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     }
        // });

        // await Promise.promisify(identities.LogIdentityCreated)().then(e => {
        //     console.log(e);
        // });

        return transaction;
    } catch (e) {
        throw e;
    }
};