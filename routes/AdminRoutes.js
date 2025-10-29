const router = require("express").Router();
const AdminController = require("../controller/AdminController");

const verifyToken = require("../helpers/verify-token");

router.post("/register", AdminController.register);
router.post("/login", AdminController.login);
router.get("/check", AdminController.checkAdmin);
router.get("/:id", AdminController.getAdmin);
router.patch("/edit/:id", verifyToken, AdminController.editAdmin);

module.exports = router;
