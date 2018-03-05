/// <reference types="node" />
import { Network, Transaction } from 'bitcoinjs-lib';
import * as fs from 'fs';
export interface BlockchainProxy {
    getPrevHash: (tx: Transaction) => Promise<any>;
    baseUrl?: string;
    api?: any;
    client?: any;
    network?: Network;
}
export declare class Stub implements BlockchainProxy {
    getPrevHash(tx: Transaction): Promise<string>;
}
export declare class RPC implements BlockchainProxy {
    client: any;
    constructor(confPath?: fs.PathLike);
    getPrevHash(tx: Transaction): Promise<string[]>;
}
export declare class BlockchainInfo implements BlockchainProxy {
    baseUrl: string;
    api: any;
    constructor();
    getPrevHash(tx: Transaction): Promise<any>;
}
