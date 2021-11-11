const mongoose = require("mongoose")
const iphoneSchema = mongoose.Schema({
    color: String,
    cost: Number,
    model: String
})
module.exports = mongoose.model("iphone", iphoneSchema)