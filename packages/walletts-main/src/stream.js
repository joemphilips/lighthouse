"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("stream");
var sodium = require('sodium');
// stream for encrypting/decrypting WalletDB data
var EncryptStream = /** @class */ (function (_super) {
    __extends(EncryptStream, _super);
    function EncryptStream(opts) {
        var _this = _super.call(this, opts) || this;
        _this.box = new sodium.Box();
        return _this;
    }
    EncryptStream.prototype._write = function (chunk, encoding, callback) {
        this.box.encrypt(chunk, encoding);
    };
    EncryptStream.prototype.end = function (cb) {
        console.log("not implemented !");
    };
    return EncryptStream;
}(stream_1.Writable));
exports.EncryptStream = EncryptStream;
var DecryptStream = /** @class */ (function (_super) {
    __extends(DecryptStream, _super);
    function DecryptStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DecryptStream;
}(stream_1.Readable));
exports.DecryptStream = DecryptStream;
var PSBTParserStream = /** @class */ (function () {
    function PSBTParserStream() {
    }
    return PSBTParserStream;
}());
exports.PSBTParserStream = PSBTParserStream;
