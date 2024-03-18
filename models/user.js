const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const userSchema = new Schema({
    username:String,
    email:{
        type:String,
        required:true
    },
    password:String,
    age:Number,
    phonenumber:Number
})


const User = mongoose.model('User',userSchema);

module.exports = {
    User
}