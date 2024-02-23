/* eslint-disable no-undef */
const mongoose = require('mongoose');
const plantSchema = new mongoose.Schema({
    id : {type:String , required:true} ,
    name : {type:String , required:true},
    care : {type:String , required:true },
    price : {type:Number , required:true },
    img : {type:String , required:true} 
});


const Plant = new mongoose.model("flowers" , plantSchema);

module.exports = Plant 