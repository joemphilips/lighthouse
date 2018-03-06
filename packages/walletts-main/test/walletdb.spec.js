"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = __importDefault(require("ava"));
var walletdb_1 = __importDefault(require("../src/walletdb"));
var mock_stream_1 = require("./helpers/mocks/mock-stream");
var utils_1 = require("./helpers/utils");
var test = ava_1.default;
test.beforeEach(function (t) {
    t.context.db = new walletdb_1.default(new mock_stream_1.MockOutStream(), new mock_stream_1.MockInStream(), utils_1.loadWalletConf("walletdb"));
});
test("walletdb can be loaded from existing file", function (t) {
    t.pass();
});
