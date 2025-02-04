const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    temperature: {type: String, required: true},
    type: {type: String,  required: true},
})

module.exports = mongoose.model("coffin", schema);