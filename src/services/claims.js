import Config from "react-native-config/index";
import Identities from "../contracts/Identities.json";

export const set = async (payload, meta) => {
    let Web3 = require('web3');
    let web3 = new Web3();
    web3.setProvider(new web3.providers.HttpProvider(Config.PROVIDER));

    let IdentitiesContract = web3.eth.contract(Identities.abi);
    let identities = IdentitiesContract.at(Config.IDENTITES_ADDR);
    let address = keystore.getAddresses()[0];
    let data = identities.createIdentityWithCall.getData(address, address, Config.claims, );

    return {
        key: "id",
        value: "owner",
    };
};