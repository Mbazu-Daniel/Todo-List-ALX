const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

const connectDB = () => {
  try {
    const conn = mongoose.connect(MONGO_URI);
    console.log("Database connection");
  } catch (err) {
    console.log("Database Error", err);
  }
};

module.exports = connectDB;
