import express from "express";
import Board from "../models/Board.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const boards = await Board.find({ userId: req.user.uid });
  res.json(boards);
});

router.post("/", authMiddleware, async (req, res) => {
  const board = await Board.create({
    title: req.body.title,
    userId: req.user.uid
  });
  res.json(board);
});

router.patch("/:id", authMiddleware, async (req, res) => {
  const { title } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ message: "Title is required" });
  }

  try {
    const board = await Board.findOne({ _id: req.params.id, userId: req.user.uid });
    if (!board) return res.status(404).json({ message: "Board not found" });

    board.title = title;
    await board.save();

    res.json(board);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update board" });
  }
});

router.delete("/:id", authMiddleware, async (req, res) => {
  await Board.findOneAndDelete({ _id: req.params.id, userId: req.user.uid });
  res.json({ message: "Board deleted" });
});

export default router;