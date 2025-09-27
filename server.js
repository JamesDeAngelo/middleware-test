const express = require("express");
const path = require("path");
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Root route (for browser testing)
app.get("/", (req, res) => {
  res.send("✅ Server is alive and working!");
});

// Webhook route (for your app/automation)
app.post("/webhook", (req, res) => {
  console.log("Webhook received:", req.body);
  res.send("Webhook received!");
});

// Example route for serving an HTML file (optional)
app.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
