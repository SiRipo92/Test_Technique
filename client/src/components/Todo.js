import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios for HTTP requests

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
        <div>
          <h2>To-Do List</h2>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
          />
          <button onClick={addTodo}>Add task</button>
    
          <ul>
            {todos.map((todo) => (
                <li key={todo._id}>
                    <span onClick={() => toggleComplete(todo._id, todo.completed)}>{todo.title}</span>
                    <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                </li>
            ))}
          </ul>
        </div>
      );
    };

export default Todo;
