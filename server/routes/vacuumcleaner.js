const  express = require('express');
const  router = express.Router();
const vacuumcleanerController = require("../controllers/vacuumcleaner")


router.get('/', vacuumcleanerController.getAllVacuumcleaner);

router.get('/:id', vacuumcleanerController.getVacuumcleanerById);

router.post("/", vacuumcleanerController.createVacuumcleaner);

router.put("/:id", vacuumcleanerController.updateVacuumcleaner)

router.delete("/:id", vacuumcleanerController.deleteVacuumcleaner)


module.exports = router;
