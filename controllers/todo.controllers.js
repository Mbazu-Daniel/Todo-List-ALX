const asyncWrapper = require("express-async-handler");
const { createCustomError } = require("../errors/custom-error");
const Todo = require("../models/todo.models");

const createTodo = asyncWrapper(async (req, res) => {
  try {
    const todo = req.body;
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getAllTodo = async (req, res) => {
  try {
    const allTodo = await Todo.find({});
    res.status(200).json(allTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTodoById = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findById({ _id: todoID });
  if (!todo) {
    return next(createCustomError(`No task with id ${todoID}`, 404));
  }
  res.status(200).json({ todo });
});

const updateTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findByIdAndUpdate({ _id: todoID }, req.body, {
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
  const todo = await Todo.findByIdAndDelete({ _id: todoID });

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
