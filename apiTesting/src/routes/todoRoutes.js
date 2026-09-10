const express = require("express");

const {
  getTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

const router = express.Router();

// GET all todos
router.get("/", getTodos);

// GET one todo
router.get("/:id", getTodoById);

// POST create todo
router.post("/", createTodo);

// PUT update todo
router.put("/:id", updateTodo);

// DELETE todo
router.delete("/:id", deleteTodo);

module.exports = router;