const mongoose = require("mongoose")
const iphoneSchema = mongoose.Schema({
    color: {
        type: String,
        minLength: 50
    },
    cost: {
        type: Number,
        minLength: 45
    },
    model: String
})
module.exports = mongoose.model("iphone", iphoneSchema)