const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Project = require("../models/Project");

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all projects
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;