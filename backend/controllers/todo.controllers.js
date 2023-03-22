const Todo = require("../models/todo.models");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTodo = asyncWrapper(async (req, res) => {
  const allTodo = await Todo.find({});
  res.status(200).json({ allTodo });
});

const createTodo = asyncWrapper(async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
});

const getTodoById = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOne({ _id: todoID });
  if (!todo) {
    return next(createCustomError(`No task with id ${todoID}`, 404));
  }
  res.status(200).json({ todo });
});

const updateTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return next(createCustomError(`No task with id ${todoID}`, 404));
  }

  res.status(200).json(todo);
});

const deleteTodo = asyncWrapper(async (req, res) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: todoID });

  if (!todo) {
    return next(createCustomError(`No task with id ${todoID}`, 404));
  }
  res.status(200).json({ todo });
});

module.exports = {
  createTodo,
  getAllTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
