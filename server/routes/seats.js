var express = require('express');
var router = express.Router();
const seatsController = require("../controllers/seats")

router.get('/', seatsController.getAllSeats);

router.get('/:id', seatsController.getSeatsById);

router.post("/", seatsController.createSeats);

router.put("/:id", seatsController.updateSeats)

router.delete("/:id", seatsController.deleteSeats)


module.exports = router;

