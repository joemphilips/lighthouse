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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var ini = __importStar(require("ini"));
var btc = __importStar(require("bitcoinjs-lib"));
var path = require('path');
var ConfigError = /** @class */ (function (_super) {
    __extends(ConfigError, _super);
    function ConfigError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ConfigError;
}(Error));
exports.ConfigError = ConfigError;
var defaultappHome = process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];
var defaultDataDir = path.join(defaultappHome, 'fireWallet');
var defaultDebugFile = path.join(defaultDataDir, 'debug.log');
var defaultConfigFile = path.join(defaultDataDir, 'wallet.conf');
var defaultPort = '58011';
var defaultDebugLevel = 'info';
function loadConfig(opts) {
    var dataDir = opts.datadir || defaultDataDir;
    var filePath = opts.conf || defaultConfigFile;
    var fileConf = ini.decode(filePath);
    var debugFile = opts.debugFile ? opts.debugFile
        : fileConf.debugFile ? fileConf.debugFile
            : defaultDebugFile;
    var networkstring = opts.network ? opts.network
        : fileConf.network ? fileConf.network
            : 'testnet3';
    var network = (networkstring === "mainnet") ? btc.networks.bitcoin
        : (networkstring === "testnet3") ? btc.networks.testnet
            : false;
    if (!network) {
        throw new ConfigError("network option for config is not good!");
    }
    var port = opts.port ? opts.port
        : fileConf.port ? fileConf.port
            : defaultPort;
    var walletDBPath = path.join(dataDir + "walletdb");
    return {
        port: port,
        datadir: dataDir,
        walletDBPath: walletDBPath,
        debugLevel: defaultDebugLevel,
        debugFile: debugFile,
        network: network,
    };
}
exports.default = loadConfig;
