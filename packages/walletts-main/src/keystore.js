"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var btc = __importStar(require("bitcoinjs-lib"));
var BasicKeystore = /** @class */ (function () {
    function BasicKeystore(seed) {
        this.HDNode = seed ? btc.HDNode.fromSeedBuffer(seed) : new btc.HDNode(btc.ECPair.makeRandom(), Buffer.alloc(32, 1));
    }
    BasicKeystore.prototype.getAddress = function () {
        return this.HDNode.getAddress();
    };
    return BasicKeystore;
}());
exports.BasicKeystore = BasicKeystore;
/*
export class ExternalKeystore implements Keystore {

}
*/ 
