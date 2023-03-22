const mongoose = require("mongoose");
require("dotenv").config();

// const MONGO_URI = process.env.MONGO_URI;
console.log("Why is this happening?", process.env.MONGO_URI);

const connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection");
  } catch (err) {
    console.log("Database Error", err);
  }
};

module.exports = connectDB;
