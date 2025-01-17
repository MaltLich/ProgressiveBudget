const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";
mongoose.connect(MONGODB_URI);

app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`Success on port ${PORT}!`);
});
