const mongoose = require("mongoose");

const directorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

module.exports = mongoose.model("Directory", directorySchema);
