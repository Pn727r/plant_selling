/* eslint-disable no-undef */
const mongoose = require('mongoose');

const URI = "mongodb://127.0.0.1:27017/raw_data"


const connectDb = async () => {
    try{
        await mongoose.connect(URI);
        console.log("Connected");
    }
    catch(error){
        console.error("error is : " + error);
    }
}

module.exports = connectDb; 