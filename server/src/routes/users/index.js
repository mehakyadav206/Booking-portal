const express = require("express");
const carDetails = require("./car.routes");

const router = express.Router();

router.use("/carDetails", carDetails);

module.exports = router;