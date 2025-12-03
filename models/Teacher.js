const mongoose = require("../db/conn.js");
const { Schema } = mongoose;

const Admin = mongoose.model(
  "Teacher",
  new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      subject: {
        type: String,
        required: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = Admin;
