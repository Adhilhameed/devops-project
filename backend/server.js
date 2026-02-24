const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load .env for MongoDB URI
const User = require("./models/User");
const Project = require("./models/Project");

const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// API routes

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET all projects
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export app for Vercel
module.exports = app;