import {INITIALIZE, IDENTITY, KEYSTORE, SEED, IPFS_UPLOAD} from "./types";
import {promisify} from "./promisify";

export {FAILURE, REQUEST, SUCCESS, PROMISIFIED} from  "./promisify"

export const keystore = promisify(KEYSTORE);
export const seed = promisify(SEED);
export const identities = promisify(IDENTITY);
export const initialize = promisify(INITIALIZE);
export const ipfsUpload = promisify(IPFS_UPLOAD);
