const Cakes = require("../models/cakes")

exports.getAllCakes = async (req, res, next) => {
    try {
        const data = await Cakes.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "Cakes found",
                payload: data
            })
        } res.status(500).send({
            message: "Cakes not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getCakesById = async (req, res, next) => {
    try {
        const data = await Cakes.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Cakes found",
                payload: data
            })
        } res.status(404).send({
            message: "Cakes not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createCakes = async (req, res, next) => {
    try {

        const data = new Cakes({
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "Cakes created",
                payload: result
            })
        } res.status(500).send({
            message: "Cakes not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateCakes = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        }
        const result = await Cakes.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Cakes updated",
                payload: result
            })
        } res.status(500).send({
            message: "Cakes not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteCakes = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            temperature: req.body.temperature,
            type: req.body.type
        }
        const result = await Cakes.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Cakes deleted",
                payload: result
            })
        } res.status(500).send({
            message: "Cakes not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}