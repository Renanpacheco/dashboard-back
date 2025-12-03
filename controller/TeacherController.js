const Teacher = require("../models/Teacher");

const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

module.exports = class PetController {
  static async register(req, res) {
    const { name, email, password, subject } = req.body;

    const teacherExists = await Teacher.findOne({ email: email });

    if (teacherExists) {
      res.status(422).json("this account already exists");
      return;
    }
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const teacher = new Teacher({
      name: name,
      email: email,
      password: passwordHash,
      subject: subject,
    });
    try {
      const newTeacher = await teacher.save();
      //await createUserToken(newTeacher, req, res);
      res.status(201);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};
