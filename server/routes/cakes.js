var express = require('express');
var router = express.Router();
const cakesController = require("../controllers/cakes")

router.get('/', cakesController.getAllCakes);

router.get('/:id', cakesController.getCakesById);

router.post("/", cakesController.createCakes);

router.put("/:id", cakesController.updateCakes)

router.delete("/:id", cakesController.deleteCakes)


module.exports = router;
