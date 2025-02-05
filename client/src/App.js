import React from "react";
import Todo from "./components/Todo"; // Import To-Do component
import "./App.css";

function App() {
  return (
    <div className="App"> {/* Main container for the application */}
      <h1>To-Do List</h1>
      <Todo /> {/* Render the To-Do component inside App */}
    </div>
  );
}

// Export the App component so it can used in index.js
export default App;