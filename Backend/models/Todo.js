import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false },
  boardId: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

export default mongoose.model("Todo", todoSchema);
