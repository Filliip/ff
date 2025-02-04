const Seats = require("../models/seats")

exports.getAllSeats = async (req, res, next) => {
    try {
        const data = await Seats.find();
        if (data && data.length != 0) {
            return res.status(200).send({
                message: "Seats found",
                payload: data
            })
        } res.status(500).send({
            message: "Seats not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.getSeatsById = async (req, res, next) => {
    try {
        const data = await Seats.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Seats found",
                payload: data
            })
        } res.status(404).send({
            message: "Seats not found"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.createSeats = async (req, res, next) => {
    try {

        const data = new Seats({
            name: req.body.name,
            material: req.body.material,
            price: req.body.price
        })
        const result = await data.save();

        if (result) {
            return res.status(201).send({
                message: "Seats created",
                payload: result
            })
        } res.status(500).send({
            message: "Seats not created"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.updateSeats = async (req,res,next) => {
    try {

        const data = {
            name: req.body.name,
            material: req.body.material,
            price: req.body.price
        }
        const result = await Seats.findByIdAndUpdate(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Seats updated",
                payload: result
            })
        } res.status(500).send({
            message: "Seats not updated"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.deleteSeats = async (req,res, next) => {
    try {

        const data = {
            name: req.body.name,
            material: req.body.material,
            price: req.body.price
        }
        const result = await Seats.findByIdAndDelete(req.params.id, data);

        if (result) {
            return res.status(200).send({
                message: "Seats deleted",
                payload: result
            })
        } res.status(500).send({
            message: "Seats not deleted"
        })
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}