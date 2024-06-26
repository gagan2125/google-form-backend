const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const formRoutes = require("./routes/FormRoute");
require("dotenv").config();

const PORT = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database is Connected");
  })
  .catch((error) => {
    console.log("Error connecting database", error);
  });

app.use("/api/form", formRoutes);

module.exports = app;
