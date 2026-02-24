const mongoose = require("mongoose");
const app = require("./server"); // Import main server
require("dotenv").config();      // Load MONGO_URI from .env

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected successfully");

  // Start local server
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Backend running locally at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});