/* eslint-disable no-undef */
const mongoose = require('mongoose');
const potSchema = new mongoose.Schema({
    owner : {type : String , required : true} , 
    id : {type:String , required:true} ,
    img : {type:String , required:true},
    category : {type:String , required:true },
    color : {type:Object , required:true },
    type : {type:String , required:true},
    price : {type:Number , required:true},
    qty : {type:Number , required:true} 

});


const Pot = new mongoose.model("pots" , potSchema);

module.exports = Pot