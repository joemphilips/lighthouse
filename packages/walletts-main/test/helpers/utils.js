"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../../src/config"));
var path = require("path");
var fs = require("fs");
var tmpDir = path.join(__dirname, "..", "tmp");
var testConfFilePath = path.join(__dirname, "..", "fixtures", "test.conf");
function loadWalletConf(testSuiteName) {
    var datadir = path.join(tmpDir, testSuiteName);
    // create datadir if it does not exist.
    if (!fs.existsSync(datadir)) {
        fs.mkdirSync(datadir);
    }
    var debugLog = path.join(datadir, "debug.log");
    var opts = {
        datadir: datadir,
        debugFile: debugLog,
        port: 0 // random port
    };
    return config_1.default(opts);
}
exports.loadWalletConf = loadWalletConf;
