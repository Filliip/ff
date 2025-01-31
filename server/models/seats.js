const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    material: {type: String, required: true},
    price: {type: String,  required: true},
})

module.exports = mongoose.model("seats", schema);