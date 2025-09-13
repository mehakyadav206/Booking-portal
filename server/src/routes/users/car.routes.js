const express = require("express");
const { getCarDetails, createCarDetails } = require("../../controllers/users/car.controllers")

const router = express.Router();

router.get("/", getCarDetails);
router.post("/", createCarDetails);

module.exports = router;