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
// Transaction Output with Metadata
// equivalent to ManagedAddress in btcwallet.
var WalletCoin = /** @class */ (function () {
    function WalletCoin() {
        this.scriptType = "nullData";
        this.script = null;
    }
    Object.defineProperty(WalletCoin.prototype, "isMine", {
        get: function () {
            // fetch data from record ...
            return true;
        },
        enumerable: true,
        configurable: true
    });
    return WalletCoin;
}());
var CoinManager = /** @class */ (function () {
    function CoinManager(p) {
        this.builder = new btc.TransactionBuilder();
        this.coins = [];
        this.proxy = p;
        console.log("coinmanager intialized");
    }
    /*
    public get lastInternalAddresses(): any {
      return "hoge"
    };
    public get lastExternalAddresses(): any {
      return "fuga"
    };
    public async importSeed (seed: string): Promise<void> {
      return
    };
    public startSync: () => Promise<void>
    public parsePSBT: (Buffer) => Promise<btc.Transaction>;
    */
    CoinManager.prototype.sign = function (key) {
        return false;
    };
    ;
    return CoinManager;
}());
exports.default = CoinManager;
