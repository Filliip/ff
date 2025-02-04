const programmer = require("../models/programmer")

exports.getAllprogrammer = async (req, res, next) => {
    try {
        const data = await programmer.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "programmer found",
                payload: data
            })
        } res.status(500).send({
            message: "programmer not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getprogrammerById = async (req, res, next) => {
    try {
        const data = await programmer.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "programmer found",
                payload: data
            })
        } res.status(404).send({
            message: "programmer not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createprogrammer = async (req, res, next) => {
    try {

        const data = new programmer({
            name: req.body.name,
            secondName: req.body.secondName,
            programmingLangue: req.body.programmingLangue,
            payment: req.body.payment

        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "programmer created",
                payload: result
            })
        } res.status(500).send({
            message: "programmer not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateprogrammer = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            secondName: req.body.secondName,
            programmingLangue: req.body.programmingLangue,
            payment: req.body.payment
        }
        const result = await programmer.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "programmer updated",
                payload: result
            })
        } res.status(500).send({
            message: "programmer not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteprogrammer = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            secondName: req.body.secondName,
            programmingLangue: req.body.programmingLangue,
            payment: req.body.payment
        }
        const result = await programmer.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "programmer deleted",
                payload: result
            })
        } res.status(500).send({
            message: "programmer not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}