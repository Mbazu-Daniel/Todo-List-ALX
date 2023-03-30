const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

router.get("/", authMiddleware, getAllTodo);
router.post("/", authMiddleware, createTodo);
router.get("/:id", authMiddleware, getTodo);
router.patch("/:id", authMiddleware, updateTodo);
router.delete("/:id", authMiddleware, deleteTodo);

module.exports = router;
