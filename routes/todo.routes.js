const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);

module.exports = router;
