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
// grpc client which speaks to backend service.
var eventemitter2_1 = require("eventemitter2");
var BackendProxy = /** @class */ (function (_super) {
    __extends(BackendProxy, _super);
    function BackendProxy(opts) {
        var _this = _super.call(this, opts) || this;
        _this.on('backend:receivePSBT', function (payload) {
            _this._receivePSBT(payload);
        });
        return _this;
    }
    ;
    BackendProxy.prototype.ping = function () {
    };
    BackendProxy.prototype._receivePSBT = function (payload) {
        return;
    };
    return BackendProxy;
}(eventemitter2_1.EventEmitter2));
exports.default = BackendProxy;
