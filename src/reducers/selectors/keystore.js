import {keystore as KeyStore} from 'eth-lightwallet';

export const keystore = (state) => {
    let serialized = state.keystore.serialized;
    try {
        return KeyStore.deserialize(serialized);
    } catch (e) {
        return {};
    }
};