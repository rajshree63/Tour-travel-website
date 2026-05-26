const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

/* Middleware */
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
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

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});