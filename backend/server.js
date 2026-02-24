const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/contact", require("./routes/contact"));

// Server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});