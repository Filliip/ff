const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {type: String, required: true},
    ratedPower: {type: String,  required: true},
    warmValueInM3: {type: String,  required: true},
    price: {type: String,  required: true},
})

module.exports = mongoose.model("firePlace", schema);