const mongoose = require("mongoose");

const paymentSchema = new mongoose.model({
    appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: "Appointment", required: true },
    amount: { type: Number, required: true },
    method: { type: String, enum: [ "Cash", "UPI" ] },
    status: { type: String, enum: [ "Pending", "Completed", "Failed" ], default: "Pending" },
    paymentDate: { type: Date, default: Date.now },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;