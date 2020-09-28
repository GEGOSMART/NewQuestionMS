"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var option = new mongoose_1.Schema({
    selectOp: { type: String, required: true },
    textOp: { type: String, required: true }
});
exports.default = mongoose_1.model('Option', option);
