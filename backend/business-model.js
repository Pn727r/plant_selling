/* eslint-disable no-undef */
const mongoose = require('mongoose');
const businessSchema = new mongoose.Schema({
    Email : {type:String , required:true} ,
    Number : {type:String , required:true},
});


const Business = new mongoose.model("businesses" , businessSchema);

module.exports = Business; 