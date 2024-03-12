/* eslint-disable no-undef */
const mongoose = require('mongoose');
const utilSchema = new mongoose.Schema({
    owner : {type : String , required : true} , 
    id : {type:String , required:true} ,
    name : {type:String , required:true},
    description : {type:String , required:true },
    usage : {type:String , required:true},
    img : {type:String , required:true },
    price : {type:Number , required:true },
    qty : {type:Number , required:true} 
});


const Util = new mongoose.model("utils" , utilSchema);

module.exports = Util; 