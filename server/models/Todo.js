const mongoose = require("mongoose");

// Define the schema for the to-do item
const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt automatically
    }
);

// Create the To-Do Model using the schema
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;