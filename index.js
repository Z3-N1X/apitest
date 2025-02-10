const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is running on Vercel!" });
});

module.exports = app;
