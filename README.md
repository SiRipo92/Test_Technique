# Tech Practice To-Do List App
This project is a full-stack to-do list application built using React for the front-end, Node.js for the back-end, and MongoDB for storing the to-do items. The app allows users to create, read, update, and delete tasks, making it a practical example of a CRUD (Create, Read, Update, Delete) operation with modern web technologies.

## Technologies Used
- **Frontend:** React, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** React useState, useEffect
- **API Communication:** Axios for HTTP requests

## Features
- **View To-Do List:** The app fetches all to-do items from the server and displays them in a list.
- **Add New Tasks:** Users can add new tasks to the to-do list.
- **Update Task Status:** Tasks can be marked as completed by clicking on the task name.
- **Delete Tasks:** Tasks can be removed from the list by clicking the "Delete" button next to each task.
- **Persistent Data:** The to-do items are stored in a MongoDB database, so data persists even if the app is refreshed.

## Project Structure
```text
├── client/                <- React frontend application
│   ├── public/             <- Public assets (e.g., index.html)
│   ├── src/                <- React source code
│   │   ├── components/     <- React components for various UI elements
│   │   ├── App.js          <- Main React app component
│   │   └── index.js        <- Entry point for React application
│   ├── package.json        <- React dependencies and scripts
│   └── .gitignore          <- Git ignore file for frontend
│
├── server/                <- Node.js backend application
│   ├── models/             <- MongoDB models for the to-do items
│   │   └── Todo.js         <- Model for To-Do item schema
│   ├── routes/             <- Express API routes for CRUD operations
│   │   └── todoRoutes.js   <- Routes for handling to-do operations
│   ├── server.js           <- Entry point for the Node.js server
│   └── .gitignore          <- Git ignore file for backend
│
├── README.md              <- Project description and setup instructions
```

## Installation
1. **Clone the repository**
```bash
git clone https://github.com/SiRipo92/Test_Technique
```
2. **Install dependencies for the server**
```bash
cd server
npm install
```
3. **Install dependencies for the client**
```bash
cd client
npm install
```
4. **Start the server and the client**
    - To start the backend server, navigate to the server/ directory and run:
    ```bash
    npm start
    ```
    - To start the React client, navigate to the client/ directory and run:
    ```bash
    npm start
    ````
    The React app will open on http://localhost:3000, and the server will be running on http://localhost:5000.

## Usage
- **Add a task:** Type a task into the input field and click "Add" to add it to the to-do list.
- **Complete a task:** Click on a task title to toggle its completion status.
- **Delete a task:** Click the "Delete" button to remove a task from the list.

### Future (Possible) Enhancements
- **User Authentication:** Add user login functionality to save personal to-do lists.
- **Task Categories:** Allow categorization of tasks for better organization.
- **Task Prioritization:** Implement prioritization to sort tasks by urgency.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


### Author(s)
Sierra Ripoche - junior web developer in training