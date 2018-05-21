import {INITIALIZE, IDENTITY, KEYSTORE, SEED} from "./types";
import {promisify} from "./promisify";

export {FAILURE, REQUEST, SUCCESS, PROMISIFIED} from  "./promisify"

export const keystore = promisify(KEYSTORE);
export const seed = promisify(SEED);
export const identities = promisify(IDENTITY);
export const initialize = promisify(INITIALIZE);
