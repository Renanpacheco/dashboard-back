const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

const getAdmin = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "acess denied" });
  }
  const decoded = jwt.verify(token, "secret");
  const adminId = decoded.id;

  const admin = await Admin.findOne({ _id: adminId });
  return admin;
};
module.exports = getAdmin;
