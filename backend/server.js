const express = require("express");
const cors = require("cors");

const app = express();

/*
=================================
   Environment Configuration
=================================
*/

// Use Render's dynamic port or fallback for local
const PORT = process.env.PORT || 10000;

// Allow frontend domain (replace with your Vercel URL in production)
const allowedOrigins = [
  "http://localhost:3000",
  "https://devops-project-ybm5.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);

app.use(express.json());

/*
=================================
            Routes
=================================
*/

// Health check route (important for Render)
app.get("/", (req, res) => {
  res.status(200).json({
    status: "Backend is running 🚀"
  });
});

// API Routes
app.use("/api/contact", require("./routes/contact"));

/*
=================================
         Start Server
=================================
*/

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});