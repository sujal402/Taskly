import express from "express";
import Todo from "../models/Todo.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/:boardId", authMiddleware, async (req, res) => {
  const todos = await Todo.find({ boardId: req.params.boardId });
  res.json(todos);
});

router.post("/:boardId", authMiddleware, async (req, res) => {
  const todo = await Todo.create({
    title: req.body.title,
    boardId: req.params.boardId
  });
  res.json(todo);
});

router.put("/:id", authMiddleware, async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(todo);
});

// PATCH /api/todos/:id
router.patch("/:id", async (req, res) => {
  const { title, completed } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title, completed },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: "Failed to update todo" });
  }
});


router.delete("/:id", authMiddleware, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

export default router;
