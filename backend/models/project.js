const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  link: String,          // GitHub link or live project
  techStack: [String],   // e.g., ["React", "Node.js"]
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Project", projectSchema);