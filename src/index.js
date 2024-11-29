const express = require("express");
const mongoose = require("mongoose");
const coffeeRoutes = require("./route/coffeeRoute");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://bereketdinku:beki1234@cluster0.a7un02o.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Use Coffee Routes
app.use("/api/coffees", coffeeRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT,"192.168.43.97", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
