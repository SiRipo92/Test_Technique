import React, { useState } from "react"; // Import useState

const Todo = () => {

    const [newTodo, setNewTodo] = useState(""); // State for input field
    const [todos, setTodos] = useState([]); // State for storing tasks

    // Function to add a new task
    const addTodo = () => {
        if (!newTodo.trim()) return; // Prevent empty tasks
        setTodos([...todos, { id: Date.now(), title:newTodo, completed: false }]);
        setNewTodo("");
    };

    // Function to toggle task completion
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed } : todo
            )
        );
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
          <button onClick={addTodo}>Add</button>
    
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
                onClick={() => toggleComplete(todo.id)} // Toggle completion
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      );
    };

export default Todo; //Export the component
