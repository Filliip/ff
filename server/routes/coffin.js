var express = require('express');
var router = express.Router();
const coffinController = require("../controllers/coffin")

router.get('/', coffinController.getAllCoffin);

router.get('/:id', coffinController.getCoffinById);

router.post("/", coffinController.createCoffin);

router.put("/:id", coffinController.updateCoffin)

router.delete("/:id", coffinController.deleteCoffin)


module.exports = router;
