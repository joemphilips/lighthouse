"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
var grpc = __importStar(require("grpc"));
var path = require('path');
var PROTO_PATH = path.join(__dirname, "..", "proto", "walletserver.proto");
var walletServiceHandlers = {
    ping: function (call, cb) {
        console.log("received ping message ", call.request);
        cb(null, { message: "hello! " + call.request.message });
    }
};
var GRPCServer = /** @class */ (function () {
    function GRPCServer() {
        console.log("going to load from ", PROTO_PATH);
        this._descriptor = grpc.load(PROTO_PATH);
    }
    GRPCServer.prototype.start = function (w, cfg) {
        var walletServer = new grpc.Server();
        walletServer.addService(this._descriptor.walletservice, walletServiceHandlers);
        walletServer.bind(cfg.port, grpc.ServerCredentials.createInsecure());
        walletServer.start();
    };
    return GRPCServer;
}());
exports.default = GRPCServer;
