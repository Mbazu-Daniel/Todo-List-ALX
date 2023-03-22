const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}...`)
    );
  } catch (err) {
    console.error(err);
  }
};

start();
