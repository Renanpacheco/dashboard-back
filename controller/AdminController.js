const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

module.exports = class AdminController {
  static async register(req, res) {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email: email });

    if (adminExists) {
      res.status(422).json("this account already exists");
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const admin = new Admin({
      name: name,
      email: email,
      password: passwordHash,
    });
    try {
      const newAdmin = await admin.save();
      res.status(201).json(newAdmin);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
