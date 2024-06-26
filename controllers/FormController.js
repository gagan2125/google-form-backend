const Form = require("../models/FormModel");

const FormController = {
  createForm: async (req, res) => {
    try {
      const { firstname, lastname, email, phone } = req.body;
      const bankstatementPath = req.file.path;

      const newForm = new Form({
        firstname,
        lastname,
        email,
        phone,
        bankstatementPath,
      });
      await newForm.save();
      res.status(201).json(newForm);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },

  getForm: async (req, res) => {
    try {
      const getForm = await Form.find();
      res.status(201).json(getForm);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  },
};

module.exports = FormController;
