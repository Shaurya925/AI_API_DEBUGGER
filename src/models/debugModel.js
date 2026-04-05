const mongoose = require('mongoose');

const debugSchema = new mongoose.Schema({
    endpoint:String,
    method:String,
    requestBody:Object,
    aiResponse:String,
    error:String
},{timestamps:true})

const debugModel = mongoose.model("Debug",debugSchema)

module.exports = debugModel