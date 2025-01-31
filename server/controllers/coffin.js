const Coffin = require("../models/coffin")

exports.getAllCoffin = async (req, res, next) => {
    try {
        const data = await Coffin.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "Coffins found",
                payload: data
            })
        } res.status(500).send({
            message: "Coffin not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getCoffinById = async (req, res, next) => {
    try {
        const data = await Coffin.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Coffin found",
                payload: data
            })
        } res.status(404).send({
            message: "Coffin not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createCoffin = async (req, res, next) => {
    try {

        const data = new Coffin({
            name: req.body.name,
            material: req.body.material,
            type: req.body.type
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "Coffin created",
                payload: result
            })
        } res.status(500).send({
            message: "Coffin not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateCoffin = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            material: req.body.material,
            type: req.body.type
        }
        const result = await Coffin.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Coffin updated",
                payload: result
            })
        } res.status(500).send({
            message: "Coffin not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteCoffin = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            material: req.body.material,
            type: req.body.type
        }
        const result = await Coffin.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Coffin deleted",
                payload: result
            })
        } res.status(500).send({
            message: "Coffin not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}