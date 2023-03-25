const express = require("express");
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

router.get("/", getAllTodo);
router.post("/", createTodo);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
