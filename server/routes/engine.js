var express = require('express');
var router = express.Router();
const engineController = require("../controllers/engine")

router.get('/', engineController.getAllEngine);

router.get('/:id', engineController.getEngineById);

router.post("/", engineController.createEngine);

router.put("/:id", engineController.updateEngine)

router.delete("/:id", engineController.deleteEngine)


module.exports = router;