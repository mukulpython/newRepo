const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcrypt");

let userSchema = new Schema({
    name: {
        require: true,
        type : String
    },
    password: {
        require: true,
        type : String
    },
    username: {
        unique: true,
        require: true,
        type : String
    },
    subject: {
        require: true,
        type : String
    }, 
    mobile: {
        require: true,
        unique:true,
        type : String
    },
    branch:{
        require:true,
        type:String
    },    
    
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})
// userSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password = await bcrypt.hash(this.password,salt);
//     next();
// })

module.exports = mongoose.model('facultyTable',userSchema)
