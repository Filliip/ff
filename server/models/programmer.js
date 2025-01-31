const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    secondName: {type: Number, required: true},
    programmingLangue: {type: String,  required: true},
    payment: {type: String,  required: true},
})

module.exports = mongoose.model("programmer", schema);