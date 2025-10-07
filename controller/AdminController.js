const createUserToken = require("../helpers/create-user-token");
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
      await createUserToken(newAdmin, req, res);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json({ message: "email or password is missing" });
      return;
    }

    const admin = await Admin.findOne({ email: email });

    if (!admin) {
      res.status(422).json("admin not found");
    }

    const checkPassword = await bcrypt.compare(password, admin.password);
    if (!checkPassword) {
      res.status(422).json({ message: "email or password is invalid" });
      return;
    }
    await createUserToken(admin, req, res);
  }
};
