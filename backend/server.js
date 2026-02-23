const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Example API route
app.get("/api/users", (req, res) => {
  res.json({ users: ["Alice", "Bob", "Charlie"] });
});

// Export app for Vercel
module.exports = app;