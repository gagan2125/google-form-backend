const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const formRoutes = require("./routes/FormRoute");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const PORT = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log("Error connecting database", error);
  });

app.use("/api/form", formRoutes);

module.exports = app;
