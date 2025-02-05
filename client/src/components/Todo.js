import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for HTTP requests

const API_URL = "http://localhost:5001/api/todos";

const Todo = () => {

    const [newTodo, setNewTodo] = useState(""); // State for input field
    const [todos, setTodos] = useState([]); // State for storing tasks

    // Fetch tasks from the backend when the component mounts
    useEffect(() => {
        axios.get(API_URL)
            .then(response => setTodos(response.data))
            .catch(error => console.error("Error fetching To Do items:", error));
    }, []);

    // Add new task (POST request)
    const addTodo = () => {
        if (!newTodo.trim()) return;
        axios.post(API_URL, {title: newTodo })
            .then(response => {
                setTodos([...todos, response.data]);
                setNewTodo("");
            })
            .catch(error => console.error("Error adding To Do:", error));
    };

    // Toggle task completion (PUT/UPDATE request)
    const toggleComplete = (id, completed) => {
        axios.put(`${API_URL}/${id}`, { completed: !completed })
            .then(response => {
                setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
            })
            .catch(error => console.error("Error updating To Do list:", error));
    };

    // Delete a task (DELETE request)
    const deleteTodo = (id) => {
        axios.delete(`${API_URL}/${id}`)
            .then(() =>{
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(error => console.error("Error deleting To Do:", error));
    };

    return (
        <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">What tasks do you have to do?</h2>
          <div className="flex mb-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task..."
              className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={addTodo}
              className="ml-2 p-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
          </div>
    
          <ul className="space-y-2">
            {todos.map((todo) => (
              <li key={todo._id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md hover:bg-gray-100">
                <span
                  onClick={() => toggleComplete(todo._id, todo.completed)}
                  className={`cursor-pointer ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
                >
                  {todo.title}
                </span>
                <button
                  onClick={() => deleteTodo(todo._id)}
                  className="p-2 text-red-600 hover:bg-red-100 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Todo;
