var express = require('express');
var router = express.Router();
const firePlaceController = require("../controllers/firePlace")

router.get('/', firePlaceController.getAllfirePlace);

router.get('/:id', firePlaceController.getfirePlaceById);

router.post("/", firePlaceController.createfirePlace);

router.put("/:id", firePlaceController.updatefirePlace)

router.delete("/:id", firePlaceController.deletefirePlace)


module.exports = router;
