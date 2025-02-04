const Engine = require("../models/engine")

exports.getAllEngine = async (req, res, next) => {
    try {
        const data = await Engine.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "Engine found",
                payload: data
            })
        } res.status(500).send({
            message: "Engine not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getEngineById = async (req, res, next) => {
    try {
        const data = await Engine.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Engine found",
                payload: data
            })
        } res.status(404).send({
            message: "Engine not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createEngine = async (req, res, next) => {
    try {

        const data = new Engine({
            name: req.body.name,
            power: req.body.power,
            gass: req.body.gass
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "Engine created",
                payload: result
            })
        } res.status(500).send({
            message: "Engine not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateEngine= async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            power: req.body.power,
            gass: req.body.gass
        }
        const result = await Engine.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Engine updated",
                payload: result
            })
        } res.status(500).send({
            message: "Engine not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteEngine = async (req,res, next) => {
    try {

        const result = await Engine.findByIdAndDelete(req.params.id);

        if (result) {
            return res.status(200).send({
                message: "Engine deleted",
                payload: result
            })
        } res.status(500).send({
            message: "Engine not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}