/* eslint-disable no-undef */
const mongoose = require('mongoose');
const soilSchema = new mongoose.Schema({
    owner : {type : String , required : true} , 
    id : {type:String , required:true} ,
    soil_name : {type:String , required:true},
    soil_type : {type:String , required:true },
    description : {type:String , required:true },
    characteristics : {type:String , required:true},
    good_for : {type:String , required:true },
    price : {type:Number , required:true },
   img : {type:String , required:true },
   qty : {type:Number , required:true} 
     
});


const Soil = new mongoose.model("soils" , soilSchema);

module.exports = Soil; 