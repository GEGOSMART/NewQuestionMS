"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Question = new mongoose_1.Schema({
    title: { type: String },
    questionCategory: { type: String, required: true },
    questionImage: { type: String, required: true },
    question: { type: String, required: true },
    optionA: { type: String, required: true },
    optionB: { type: String, required: true },
    optionC: { type: String },
    optionD: { type: String },
    answer: { type: String, required: true },
    created_ad: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    created_by: { type: String, required: true }
});
exports.default = mongoose_1.model('Question', Question);
