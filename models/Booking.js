const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    name: String,

    email: String,

    package: String,

    travelers: Number,

    date: String

});

module.exports = mongoose.model("Booking", bookingSchema);