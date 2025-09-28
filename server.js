const express = require("express");
const app = express();

// Middleware: parse JSON
app.use(express.json());

// Root route (for quick browser test)
app.get("/", (req, res) => {
  res.send("✅ Server is alive and working!");
});

// Telnyx Webhook route
app.post("/telnyx-webhook", (req, res) => {
  console.log("📞 Telnyx Webhook Event:", JSON.stringify(req.body, null, 2));

  // Always respond quickly so Telnyx knows you got the event
  res.status(200).send("Webhook received");

  // Example: detect inbound call
  if (req.body.data && req.body.data.event_type === "call.initiated") {
    console.log("🚀 Inbound call received!");
    // later: reply with instructions, route to Voiceflow, etc.
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
