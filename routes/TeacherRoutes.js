const router = require("express").Router();

const TeacherController = require("../controller/TeacherController");

const verifyToken = require("../helpers/verify-token");

router.post("/register", verifyToken, TeacherController.register);

module.exports = router;
