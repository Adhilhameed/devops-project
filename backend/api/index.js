import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

export default app;