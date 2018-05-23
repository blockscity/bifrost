import IPFS from 'ipfs-api';

const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});


export const upload = async (payload, meta) => {
    let s = JSON.stringify(payload.body);
    return (await ipfs.files.add(ipfs.Buffer.from(s)))[0];
};


export default ipfs;