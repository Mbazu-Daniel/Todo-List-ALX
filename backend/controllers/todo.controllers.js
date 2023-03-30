const Todo = require("../models/todo.models");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTodo = asyncWrapper(async (req, res) => {
  const todo = await Todo.find({ author: req.user._id });
  res.status(200).json({ todo });
});

const getTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOne({ _id: todoID, author: req.user._id });
  if (!todo) {
    return next(createCustomError(`No todo with id : ${todoID}`, 404));
  }

  res.status(200).json({ todo });
});

const createTodo = asyncWrapper(async (req, res) => {
  const author = req.user._id; // get the authenticated user's id
  const todo = await Todo.create({ ...req.body, author }); // assign the author id to the todo
  res.status(201).json({ todo });
});

const deleteTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOneAndDelete({ _id: todoID });
  if (!todo) {
    return next(createCustomError(`No todo with id : ${todoID}`, 404));
  }
  res
    .status(204)
    .json({ msg: ` Todo with id : ${todoID} deleted successfully` });
});
const updateTodo = asyncWrapper(async (req, res, next) => {
  const { id: todoID } = req.params;

  const todo = await Todo.findOneAndUpdate(
    { _id: todoID, author: req.user._id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!todo) {
    return next(createCustomError(`No todo with id : ${todoID}`, 404));
  }

  res.status(201).json({ todo });
});

module.exports = {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
