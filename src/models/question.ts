import {Schema, model} from 'mongoose'

const Question = new Schema({
    statement: { type: String, required: true },
    image:    { type: String, required: true },
    optionA:  { type: String, required: true },
    optionB:  { type: String, required: true },
    optionC:  { type: String },
    optionD:  { type: String },
    ans:      { type: String, required: true },
    category:  { type: String, required: true },
    continent:  { type: String },
    created_at: { type: Date , default: Date.now},
    updated_at: { type: Date , default: Date.now},
    creator: { type: String , required: true}
});


export default model ('Question', Question);