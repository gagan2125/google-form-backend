const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");

const FormController = require("../controllers/FormController");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("bankstatement"), FormController.createForm);
router.get("/", FormController.getForm);

module.exports = router;
