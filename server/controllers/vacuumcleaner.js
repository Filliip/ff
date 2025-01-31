const vacuumcleaner = require("../models/vacuumcleaner")

exports.getAllVacuumcleaner = async (req, res, next) => {
    try {
        const data = await vacuumcleaner.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "vacuumcleaner found",
                payload: data
            })
        } res.status(500).send({
            message: "vacuumcleaner not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getVacuumcleanerById = async (req, res, next) => {
    try {
        const data = await vacuumcleaner.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "vacuumcleaner found",
                payload: data
            })
        } res.status(404).send({
            message: "vacuumcleaner not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createVacuumcleaner = async (req, res, next) => {
    try {

        const data = new vacuumcleaner({
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "vacuumcleaner created",
                payload: result
            })
        } res.status(500).send({
            message: "vacuumcleaner not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateVacuumcleaner= async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price
        }
        const result = await vacuumcleaner.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "vacuumcleaner updated",
                payload: result
            })
        } res.status(500).send({
            message: "vacuumcleaner not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteVacuumcleaner = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price
        }
        const result = await vacuumcleaner.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "vacuumcleaner deleted",
                payload: result
            })
        } res.status(500).send({
            message: "vacuumcleaner not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}