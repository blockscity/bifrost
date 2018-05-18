import {keystore} from 'eth-lightwallet';


export const create = (password) => {
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

export const rehydrate = (serialized) => {
    return new Promise((resolve, reject) => {
        try {
            return keystore.deserialize(serialized);
        } catch (e) {
            reject(e);
        }
    });
};
