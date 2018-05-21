require('react-native-browser-polyfill');
global.Buffer = require('buffer').Buffer;
global.process = require('process');
global.process.env.NODE_ENV = __DEV__ ? 'development' : 'production';

// Needed so that 'stream-http' chooses the right default protocol.
global.location = {
    protocol: 'file:',
};

global.crypto = require('crypto');
global.crypto.getRandomValues = function (byteArray) {
    for (let i = 0; i < byteArray.length; i++) {
        byteArray[i] = Math.floor(256 * Math.random());
    }
};

global._fetch = global.fetch;
global.fetch = function(uri, options, ...args) {
    return global._fetch(uri, options, ...args).then((response) => {
        console.log('Fetch', { request: { uri, options, ...args }, response });
        return response;
    });
};