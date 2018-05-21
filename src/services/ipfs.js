import IPFS from 'ipfs-api';

const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});

'use strict'

const TransformStream = require('readable-stream').Transform

/*
  Transforms a stream of {Name, Hash} objects to include size
  of the DAG object.
  Usage: inputStream.pipe(new FileResultStreamConverter())
  Input object format:
  {
    Name: '/path/to/file/foo.txt',
    Hash: 'Qma4hjFTnCasJ8PVp3mZbZK5g2vGDT4LByLJ7m8ciyRFZP'
    Size: '20'
  }
  Output object format:
  {
    path: '/path/to/file/foo.txt',
    hash: 'Qma4hjFTnCasJ8PVp3mZbZK5g2vGDT4LByLJ7m8ciyRFZP',
    size: 20
  }
*/
class FileResultStreamConverter extends TransformStream {
    constructor (options) {
        console.log("convert");
        const opts = Object.assign({}, options || {}, { objectMode: true })
        super(opts)
    }

    _transform (obj, enc, callback) {
        console.log("convert");
        if (!obj.Hash) {
            return callback()
        }

        callback(null, {
            path: obj.Name,
            hash: obj.Hash,
            size: parseInt(obj.Size, 10)
        })
    }
}



export const upload = async (payload, meta) => {
    return new Promise((resolve, reject) => {
        try {
            ipfs.files.add(ipfs.Buffer.from(JSON.stringify(payload.body)), {
                converter: FileResultStreamConverter
            }, function (err, res) {
                console.log("done");
                if (err|| !res) {
                    console.log(err);
                    if (err.message === 'Cannot read property \'x-stream-error\' of undefined') {
                        resolve(res);
                    }
                    reject(err);
                }
                resolve(res);
            })
        } catch (e) {

        }
    })
    // console.log("upload");
    // try {
    //     let res = await new Promise((resolve, reject) => ipfs.add(Buffer.from(JSON.stringify(payload.body)), function (err, res) {
    //         console.log("done");
    //         if (err|| !res) {
    //             reject(err);
    //         }
    //         resolve(res);
    //     }));
    //     console.log("res");
    //     return res[0].hash;
    // } catch (e) {
    //     console.log("error");
    //     console.log(e);
    // }
    // console.log("end upload");
};


export default ipfs;