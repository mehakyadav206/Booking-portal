const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    serviceName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    estimatedTime: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;