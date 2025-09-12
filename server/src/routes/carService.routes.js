const express = require("express");
const router = express.Router();

// Car Service Routes
router.post("/", carServiceController.createService);
router.get("/", carServiceController.getAllServices);
router.get("/:id", carServiceController.getServiceById);
router.put("/:id", carServiceController.updateService);
router.post("/:id", carServiceController.deleteService);

module.exports = router;