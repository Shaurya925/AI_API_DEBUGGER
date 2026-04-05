const mongoose = require('mongoose');
const config = require('../config/config');

const MONGO_URI = config.MONGO_URI

const connectDB = async () =>{
    try{
        await mongoose.connect(MONGO_URI)
        console.log("Connected to MongoDB")
    }catch(err){
        console.log(err.message)
    }
}

module.exports = connectDB