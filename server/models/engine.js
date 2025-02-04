const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    power: {type: Number, required: true},
    gass: {type: String,  required: true},
})

module.exports = mongoose.model("engine", schema);