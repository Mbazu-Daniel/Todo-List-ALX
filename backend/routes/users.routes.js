const express = require("express");
const {
  createUser,
  loginUser,
  allUsers,
  singleUser,
} = require("../controllers/users.controllers");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/", allUsers);
router.get("/:id", singleUser);

module.exports = router;
