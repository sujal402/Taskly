import express from "express";
import admin from "../config/firebase.js";
import User from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    const existingUser = await User.findOne({ uid: decoded.uid });
    if (existingUser) return res.json(existingUser);

    const user = await User.create({
      uid: decoded.uid,
      email: decoded.email
    });

    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

export default router;
