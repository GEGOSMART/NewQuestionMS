import {Schema, model} from 'mongoose'

const Question = new Schema({
    continent: { type: String },
    questionCategory: { type: String, required: true },
    questionImage: { type: String, required: true },
    question: { type: String, required: true } ,
    optionA: { type: String, required: true },
    optionB: { type: String, required: true },
    optionC: { type: String },
    optionD: { type: String },
    answer: { type: String, required: true },
    created_ad: { type: Date , default: Date.now},
    updated_at: { type: Date , default: Date.now},
    created_by: { type: String , required: true}
});


export default model ('Question', Question);