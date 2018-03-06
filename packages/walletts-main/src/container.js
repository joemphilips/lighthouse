"use strict";
// container for Injecting Dependency to default WalletService.
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var wallet_1 = require("./wallet");
var rpc_server_1 = __importDefault(require("./rpc_server"));
var awilix_1 = require("awilix");
var blockchain_proxy_1 = require("blockchain-proxy");
var walletdb_1 = __importDefault(require("./walletdb"));
var stream_1 = require("./stream");
var keystore_1 = require("./keystore");
var node_1 = __importDefault(require("./backend/node"));
var container = awilix_1.createContainer({
    injectionMode: awilix_1.InjectionMode.PROXY
});
container.register({
    Wallet: awilix_1.asClass(wallet_1.BasicWallet),
    Proxy: awilix_1.asClass(blockchain_proxy_1.RPC),
    KeyStore: awilix_1.asClass(keystore_1.BasicKeystore),
    RPCServer: awilix_1.asClass(rpc_server_1.default),
    BackendProxy: awilix_1.asClass(node_1.default),
    WalletDB: awilix_1.asClass(walletdb_1.default),
    WalletOutStream: awilix_1.asClass(stream_1.EncryptStream),
    WalletInStream: awilix_1.asClass(stream_1.DecryptStream)
});
exports.default = container;
