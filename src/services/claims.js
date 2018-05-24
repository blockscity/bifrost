import Config from "react-native-config";
import Identities from "../contracts/Identities.json";
import Claims from "../contracts/Claims.json.js";
import {Promise} from 'bluebird';
import Transaction from 'ethereumjs-tx';
import {BN} from 'ethereumjs-util';
import base58 from 'bs58';


export const set = async (keystore, ipfs) => {
    let Web3 = require('web3');
    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(Config.PROVIDER));

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
        value: '0x00'
    };

    let estimated = await Promise.promisify(web3.eth.estimateGas)(tx);
    tx.gasLimit = new BN(estimated).mul(new BN(20, 10)).div(new BN(19, 10));
    let signedGas = await Promise.promisify(keystore.signTransaction, {context: keystore})(tx);

    let txHash = await Promise.promisify(web3.eth.sendRawTransaction)(signedGas);
    console.log(txHash);
    return {
        key: "id",
        value: "owner",
    };
};