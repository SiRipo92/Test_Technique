const express = require("express");
const Todo = require("../models/Todo.js"); // Import the Todo model

const router = express.Router();

// Get all to-do items
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos); // Return all todos as JSON
  } catch (error) {
    res.status(500).json({ message: "Error fetching to-do items", error });
  }
});

// Add a new to-do item
router.post("/", async (req, res) => {
  const { title } = req.body; // Get the title from the request body
  try {
    const newTodo = new Todo({
      title,
      completed: false,
    });
    
    const savedTodo = await newTodo.save(); // Save to the database
    res.status(201).json(savedTodo); // Return the saved to-do item
  } catch (error) {
    res.status(500).json({ message: "Error adding to-do item", error });
  }
});

// Update a to-do item (modify title or mark as completed)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body; // Get title and completed status from the request body

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true } // Return the updated document
    );
    
    if (!updatedTodo) {
      return res.status(404).json({ message: "To-do item not found" });
    }

    res.status(200).json(updatedTodo); // Return the updated to-do item
  } catch (error) {
    res.status(500).json({ message: "Error updating to-do item", error });
  }
});

// Delete a to-do item
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id); // Delete the to-do item by ID
    res.status(200).json({ message: "To-do item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting to-do item", error });
  }
});

module.exports = router; // Export the routes to be used in server.js