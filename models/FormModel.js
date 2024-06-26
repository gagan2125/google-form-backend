const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  bankstatementPath: {
    type: String,
  },
});

module.exports = mongoose.model("GoogleForm", formSchema);
