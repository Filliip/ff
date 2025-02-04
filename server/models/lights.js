const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    temperature: {type: Number, required: true},
    type: {type: String,  required: true},
})

module.exports = mongoose.model("lights", schema);