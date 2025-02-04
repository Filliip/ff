var express = require('express');
var router = express.Router();
const programmerController = require("../controllers/programmer")

router.get('/', programmerController.getAllprogrammer);

router.get('/:id', programmerController.getprogrammerById);

router.post("/", programmerController.createprogrammer);

router.put("/:id", programmerController.updateprogrammer)

router.delete("/:id", programmerController.deleteprogrammer)


module.exports = router;
