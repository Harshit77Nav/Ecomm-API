const mongoose = require("mongoose");

const EcommSch = mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    category:String
})

const EcommModel = mongoose.model("products",EcommSch);

module.exports = EcommModel;