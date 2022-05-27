const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        unique:true, 
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Registeruser', userSchema)