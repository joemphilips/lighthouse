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
// grpc client which speaks to backend service from browser.
// it also works as a Subject pattern which accepts observer and notify the wallet about when ...
//  1. it gets offline.
//  2. it receives push notifications from server.
var eventemitter2_1 = require("eventemitter2");
var grpc_web_client_1 = require("grpc-web-client");
var wallet_protoc_1 = require("wallet-protoc");
var message = __importStar(require("wallet-protoc"));
var BackendProxyWeb = /** @class */ (function (_super) {
    __extends(BackendProxyWeb, _super);
    function BackendProxyWeb(opts) {
        var _this = _super.call(this, opts) || this;
        _this.url = !opts.url.startsWith('http') ? 'http://' + opts.url : opts.url;
        _this.on('backend:receivePSBT', function (payload) {
            _this._receivePSBT(payload);
        });
        return _this;
    }
    ;
    BackendProxyWeb.prototype.ping = function () {
        var request = new message.PingRequest();
        request.setMessage("this is ping message!");
        console.log("going to ping to " + this.url + " with request " + request);
        return grpc_web_client_1.grpc.unary(wallet_protoc_1.CrowdFundingService.Ping, {
            request: request,
            host: this.url,
            onEnd: function (_a) {
                var status = _a.status, statusMessage = _a.statusMessage, headers = _a.headers, message = _a.message, trailers = _a.trailers;
                console.log("received pong from server", status, statusMessage, headers, message, trailers);
            }
        });
    };
    BackendProxyWeb.prototype._receivePSBT = function (payload) {
        throw new Error("_receivePSBT not implemented yet! but got payload " + payload);
    };
    return BackendProxyWeb;
}(eventemitter2_1.EventEmitter2));
exports.default = BackendProxyWeb;
