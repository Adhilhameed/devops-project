const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const newMessage = new Contact(req.body);
    await newMessage.save();

    res.status(200).json({
      message: "Message saved successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;