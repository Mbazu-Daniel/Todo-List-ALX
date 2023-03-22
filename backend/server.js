const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const todoRouter = require("./routes/todo.routes");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.baseUrl}${req.url}`);
});

// routes
app.use("/todo", todoRouter);

app.get("", (req, res) => {
  res.send("Hello World");
});

// error
// app.use(notFound);
// app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
  } catch (err) {
    console.error(err);
  }
};

start();
