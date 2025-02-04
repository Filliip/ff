var express = require('express');
var router = express.Router();
const lightsController = require("../controllers/lights")

router.get('/', lightsController.getAllLights);

router.get('/:id', lightsController.getLightsById);

router.post("/", lightsController.createLights);

router.put("/:id", lightsController.updateLights)

router.delete("/:id", lightsController.deleteLights)


module.exports = router;
