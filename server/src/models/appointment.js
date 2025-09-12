const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    carId: { type: mongoose.Schema.Types.ObjectId, ref: "Car", required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    appointmentDate: { type: Date, default: Date.now },
    status: { type: String, enum: [ "Scheduled", "In Progress", "Completed", "Cancelled" ]},
    paymentStatus: { type: String, enum: [ "Pending", "Paid" ], default: "Pending" },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;