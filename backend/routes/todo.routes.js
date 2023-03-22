const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controllers");

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);

module.exports = router;

// router.post('/', createTodo);

// router.get('/', getAllTodo);

// router.get('/:id', getTodoById);

// router.put('/:id', updateTodo);

// router.delete('/:id', deleteTodo);
