const express = require("express");
const connectDB = require("./db/connectDB");
require("dotenv").config();
const todoRouter = require("./routes/todo.routes");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const app = express();

app.use(express.static("./public"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// routes
app.use("/todo", todoRouter);

app.get("", (req, res) => {
  res.send("Hello World");
});

// error
app.use(notFound);
app.use(errorHandlerMiddleware);
app.use(cors());

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    console.log("Swagger UI started");
    app.listen(PORT, () => console.log(`Server started on port ${PORT}...`));
  } catch (err) {
    console.error(err);
  }
};

start();
