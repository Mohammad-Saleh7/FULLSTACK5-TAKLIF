const express = require("express");
const Directory = require("../models/Directory");
const router = express.Router();

router.post("/", async (req, res) => {
  const directory = new Directory(req.body);
  await directory.save();
  res.status(201).json(directory);
});

router.get("/", async (req, res) => {
  const directories = await Directory.find();
  res.json(directories);
});

router.put("/:id", async (req, res) => {
  const directory = await Directory.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(directory);
});

router.delete("/:id", async (req, res) => {
  await Directory.findByIdAndDelete(req.params.id);
  res.json({ message: "Directory deleted" });
});

module.exports = router;
