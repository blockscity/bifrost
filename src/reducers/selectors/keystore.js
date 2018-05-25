import {keystore as KeyStore} from 'eth-lightwallet';

export const keystore = (state) => {
    try {
        let serialized = state.keystore.serialized;
        return KeyStore.deserialize(serialized);
    } catch (e) {
        return {};
    }
};