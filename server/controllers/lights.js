const Lights = require("../models/lights")

exports.getAllLights = async (req, res, next) => {
    try {
        const data = await Lights.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "Lights found",
                payload: data
            })
        } res.status(500).send({
            message: "Lights not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getLightsById = async (req, res, next) => {
    try {
        const data = await Lights.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Lights found",
                payload: data
            })
        } res.status(404).send({
            message: "Lights not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createLights = async (req, res, next) => {
    try {

        const data = new Lights({
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "Lights created",
                payload: result
            })
        } res.status(500).send({
            message: "Lights not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateLights = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        }
        const result = await Lights.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Lights updated",
                payload: result
            })
        } res.status(500).send({
            message: "Lights not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteLights = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        }
        const result = await Lights.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Lights deleted",
                payload: result
            })
        } res.status(500).send({
            message: "Lights not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}