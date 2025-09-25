const router = require("express").Router();
const AdminController = require("../controller/AdminController");

router.post("/register", AdminController.register);

module.exports = router;
