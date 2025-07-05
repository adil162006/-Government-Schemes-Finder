// Import necessary modules
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");



const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection URI
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri);
const dbName = "government_schemes";

// Connect to MongoDB
async function connectDB() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
connectDB();

// Endpoint to fetch schemes based on user input
app.post("/api/schemes", async (req, res) => {
  try {
    const { name, age, location } = req.body;

    if (!name || !age || !location) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const db = client.db(dbName);
    const schemesCollection = db.collection("schemes");

    const matchedSchemes = await schemesCollection.find({
    location: { $regex: new RegExp("^" + location + "$", "i") },
    minAge: { $lte: age },
    maxAge: { $gte: age }
    }).toArray();

    res.json({ name, schemes: matchedSchemes });
  } catch (err) {
    console.error("Error fetching schemes:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/schemes/all", async (req, res) => {
  try {
    const db = client.db(dbName);
    const schemesCollection = db.collection("schemes");

    const allSchemes = await schemesCollection.find({}).toArray();
    res.json(allSchemes);
  } catch (err) {
    console.error("Error fetching all schemes:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
