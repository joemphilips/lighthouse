"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var stream_1 = require("../src/stream");
var ava_1 = __importDefault(require("ava"));
console.log('PSBT test', stream_1.PSBTParserStream);
ava_1.default("parser", function (t) {
    t.pass();
});
