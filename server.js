require("dotenv").config();
const express = require("express")
const app = express();


const router = require("./routes/auth.routes")

app.use("/auth",router)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});