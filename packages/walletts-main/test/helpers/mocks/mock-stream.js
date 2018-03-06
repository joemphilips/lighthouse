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
var MockOutStream = /** @class */ (function (_super) {
    __extends(MockOutStream, _super);
    function MockOutStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockOutStream;
}(stream_1.Writable));
exports.MockOutStream = MockOutStream;
var MockInStream = /** @class */ (function (_super) {
    __extends(MockInStream, _super);
    function MockInStream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MockInStream;
}(stream_1.Readable));
exports.MockInStream = MockInStream;
