// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

// Middleware setup
app.use(cors()); // Allow cross-origin requests from the front-end
app.use(express.json()); // To parse JSON request bodies

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/todolist", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Error connecting to MongoDB:", error));

// Use the to-do routes
app.use("/api/todos", todoRoutes);

// Set up a basic route for testing the server
app.get("/", (req, res) => {
    res.send("Hello, this is your To-Do List API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});