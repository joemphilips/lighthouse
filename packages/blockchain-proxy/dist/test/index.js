"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var ava_1 = require("ava");
var proxy_1 = require("../src/proxy");
var bitcoinjs_lib_1 = require("bitcoinjs-lib");
ava_1.default('blockchain.info proxy', function (t) { return __awaiter(_this, void 0, void 0, function () {
    var txHash, tx, coinbaseTX, p, prevHash;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                txHash = "f3a935718cf0c7da38b53bbed75968df68b68cfbf28abec423f716adf970dfae";
                tx = bitcoinjs_lib_1.Transaction.fromHex("0100000001dfc343ea882f3145458d9e9cf15a92378efb464d12959144b6805c6b5a06e539010000006b483045022100d6c719fe26acc319055328aead1225073af55f5ec9481d3c7873bb07d512cb61022006674ee9e28eaccb5164fcab62e5ba22d01bb7ff5f8ea1dbbb7327c35f490f5b012102048a86962d920ebac4565c4fab7748c9361da8ea79d9b8b7c635f42bc26f8fceffffffff0280a90300000000001976a91415177e6a56668efe4598657cf1462ebda786a36888acb0e6d416000000001976a914b400b6356d0c7a0397735ee3313afa561bfa3d8f88ac00000000");
                coinbaseTX = bitcoinjs_lib_1.Transaction.fromHex("010000000101820e2169131a77976cf204ce28685e49a6d2278861c33b6241ba3ae3e0a49f020000008b48304502210098a2851420e4daba656fd79cb60cb565bd7218b6b117fda9a512ffbf17f8f178022005c61f31fef3ce3f906eb672e05b65f506045a65a80431b5eaf28e0999266993014104f0f86fa57c424deb160d0fc7693f13fce5ed6542c29483c51953e4fa87ebf247487ed79b1ddcf3de66b182217fcaf3fcef3fcb44737eb93b1fcb8927ebecea26ffffffff02805cd705000000001976a91429d6a3540acfa0a950bef2bfdc75cd51c24390fd88ac80841e00000000001976a91417b5038a413f5c5ee288caa64cfab35a0c01914e88ac00000000");
                p = new proxy_1.BlockchainInfo();
                return [4 /*yield*/, p.getPrevHash(tx)];
            case 1:
                prevHash = _a.sent();
                t.truthy(prevHash);
                return [2 /*return*/];
        }
    });
}); });
ava_1.default.only("bitcoin core rpc client", function (t) { return __awaiter(_this, void 0, void 0, function () {
    var testConfPath, p, tx, prevHex, expected;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                testConfPath = __dirname + "/bitcoin-sandbox.conf";
                p = new proxy_1.RPC(testConfPath);
                tx = bitcoinjs_lib_1.Transaction.fromHex("0100000001334c7a69a60fa02dc3d8e9a1854e1e8bd12a0601272c5b2e5300ceeac95899e2010000006b483045022100890ad079bd5cb6509e9abcab837bf5a0c4a89e79d22ec51e49f839714eb3b43f02203852aa39dff525237ed89dbccad9f6e50208ae5feb3344b0affe8eac0729eb4f012102c663f86b2e16bca703fab96d305c07502f2eb8f6d76c9b37c302c38f31bd5407ffffffff0288130000000000001976a914a6cdb820f0b59f1b251aa194326e8a8b9af27e8b88acf0ea7900000000001976a914409762d8406a28af9c86f94010753298ee2b7fb788ac00000000");
                return [4 /*yield*/, p.getPrevHash(tx)];
            case 1:
                prevHex = _a.sent();
                expected = ["e29958c9eace00532e5b2c2701062ad18b1e4e85a1e9d8c32da00fa6697a4c33"];
                t.deepEqual(prevHex, expected);
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map