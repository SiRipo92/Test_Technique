import React from "react";
import Todo from "./components/Todo"; // Import To-Do component
import "./App.css";

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">To-Do List</h1>
      <Todo /> {/* Render the To-Do component inside App */}
    </div>
  );
}

export default App;
