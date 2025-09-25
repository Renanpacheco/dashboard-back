require("dotenv").config();
const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(process.env.DATABASE_URL);
  console.log("connect");
}

main().catch((err) => console.log(err));

module.exports = mongoose;
