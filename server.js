const express = require("express");
const mongoose = require("mongoose");
const Booking = require("./models/Booking");

const app = express();

const PORT = 3000;


/* Middleware */

app.use(express.static(__dirname));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/* MongoDB Connection */

mongoose.connect(
    "mongodb+srv://mamtadevi963161_db_user:LEW8Sux0aWDA99DV@cluster0.xah1qv5.mongodb.net/tourDB?retryWrites=true&w=majority"
)

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log("MongoDB Error:", err);

});


/* Home Route */

app.get("/", (req, res) => {

    res.sendFile(__dirname + "/index.html");

});


/* Server Start */
/* Booking Route */

app.post("/book", async (req, res) => {

    try {

        const newBooking = new Booking({

            name: req.body.name,

            email: req.body.email,

            package: req.body.package,

            travelers: req.body.travelers,

            date: req.body.date

        });

        await newBooking.save();

        res.send("Booking Successful!");

    }

    catch (error) {

        console.log(error);

        res.send("Error saving booking");

    }

});
app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});