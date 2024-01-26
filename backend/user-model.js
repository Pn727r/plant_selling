/* eslint-disable no-undef */
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    FirstName : {type:String , required:true} ,
    LastName : {type:String , required:true},
    Email : {type:String , required:true },
    Password : {type:String , required:true } 
});


const User = new mongoose.model("users" , userSchema);

module.exports = User; 