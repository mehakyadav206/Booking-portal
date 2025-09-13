const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    carName: { type: String, required: true },
    licensePlate: { type: String, required: true },
    mileage: { type: Number, required: true },
    year: { type: Number, required: true },
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;