const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Task = require("../models/Task");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "User created", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid password" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ message: "Login successful", token });
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.put("/:id", async (req, res) => {
  const { password, ...rest } = req.body;
  if (password) {
    const salt = await bcrypt.genSalt(10);
    rest.password = await bcrypt.hash(password, salt);
  }
  const user = await User.findByIdAndUpdate(req.params.id, rest, { new: true });
  res.json(user);
});

router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

router.get("/:id/tasks", async (req, res) => {
  const tasks = await Task.find({ userId: req.params.id });
  res.json(tasks);
});

module.exports = router;
