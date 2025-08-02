const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.user.userId });
  await task.save();
  res.status(201).json(task);
});

router.get("/", async (req, res) => {
  const tasks = await Task.find().populate("dirId userId");
  res.json(tasks);
});

router.get("/directory/:dirId", async (req, res) => {
  const tasks = await Task.find({ dirId: req.params.dirId });
  res.json(tasks);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
