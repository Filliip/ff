const firePlace = require("../models/firePlace")

exports.getAllfirePlace = async (req, res, next) => {
    try {
        const data = await firePlace.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "firePlace found",
                payload: data
            })
        } res.status(500).send({
            message: "firePlace not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getfirePlaceById = async (req, res, next) => {
    try {
        const data = await firePlace.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "firePlace found",
                payload: data
            })
        } res.status(404).send({
            message: "firePlace not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createfirePlace = async (req, res, next) => {
    try {

        const data = new firePlace({
            name: req.body.name,
            ratedPower: req.body.ratedPower,
            warmValueInM3: req.body.warmValueInM3,
            price: req.body.price
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "firePlace created",
                payload: result
            })
        } res.status(500).send({
            message: "firePlace not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updatefirePlace = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            ratedPower: req.body.ratedPower,
            warmValueInM3: req.body.warmValueInM3,
            price: req.body.price
        }
        const result = await firePlace.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "firePlace updated",
                payload: result
            })
        } res.status(500).send({
            message: "firePlace not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deletefirePlace = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            ratedPower: req.body.ratedPower,
            warmValueInM3: req.body.warmValueInM3,
            price: req.body.price
        }
        const result = await firePlace.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "firePlace deleted",
                payload: result
            })
        } res.status(500).send({
            message: "firePlace not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}