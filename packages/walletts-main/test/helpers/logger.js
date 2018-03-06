"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bunyan_1 = require("bunyan");
var log = bunyan_1.createLogger({
    name: "testLogger",
    straem: process.stdout,
    level: "info"
});
exports.default = log;
