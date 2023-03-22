const mongoose = require("mongoose");

const Todo = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    default: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Todo", Todo);
