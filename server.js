const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

/* Middleware */
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* MongoDB Connection */
mongoose.connect(
  "mongodb+srv://mamtadevi963161_db_user:LEW8Sux0aWDA99DV@cluster0.xah1qv5.mongodb.net/tourDB?retryWrites=true&w=majority&appName=Cluster0"
)

.then(() => {
  console.log("MongoDB Connected");
})

.catch((err) => {
  console.log(err);
});

/* Home Route */
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

/* Start Server */
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});