const mongoose = require('mongoose')
const Schema = mongoose.Schema


let userSchema = new Schema({
    question: {
        require: true,
        type : String
    },
    askedby: {
        require: true,
        type : String
    },
    subject: {
        unique: true,
        require: true,
        type : String
    },
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})


module.exports = mongoose.model('questionTaable',userSchema)
