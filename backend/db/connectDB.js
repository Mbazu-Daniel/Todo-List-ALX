const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection");
  } catch (err) {
    console.log("Database Error", err);
  }
};

module.exports = connectDB;
