import React, { useState } from "react"; // Import useState

const Todo = () => {

    const [newTodo, setNewTodo] = useState(""); // State for input field

    return (
        <div>
            <h2>What do you have to do?</h2>
            {/* Input field for new task */}
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)} // Update state when user types
                placeholder="Add a new task..."
            />
            <button>
                Add task
            </button>
        </div>
    );
};

export default Todo; //Export the component
