import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// =======================================================================
//  FULL TUTORIAL - FRONTEND (JSONPlaceholder API) & BACKEND (Node+Mongo)
// =======================================================================
const FullStackTutorialPage = () => {
  // ------------------- FRONTEND STATE -------------------
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "https://jsonplaceholder.typicode.com/users";

  // ------------------- FRONTEND: FETCH USERS -------------------
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setUsers(res.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // ------------------- FRONTEND: ADD NEW USER -------------------
  const addUser = async () => {
    const newUser = { name: "John Doe", email: "john@example.com" };
    try {
      const res = await axios.post(API_URL, newUser);
      // Update local state manually
      setUsers((prevUsers) => [...prevUsers, { ...newUser, id: res.data.id || Date.now() }]);
    } catch (err) {
      console.error(err);
      setError("Failed to add user");
    }
  };

  // ------------------- FRONTEND: UPDATE USER -------------------
  const updateUser = async (id) => {
    const updatedData = { name: "Jane Doe", email: "jane@example.com" };
    try {
      await axios.put(`${API_URL}/${id}`, updatedData);
      // Update local state manually
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
      );
    } catch (err) {
      console.error(err);
      setError("Failed to update user");
    }
  };

  // ------------------- FRONTEND: DELETE USER -------------------
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Remove from local state manually
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete user");
    }
  };

  // ------------------- FRONTEND TUTORIAL STEPS -------------------
  const frontendSteps = [
    {
      title: "1. Frontend: Initialize State",
      description:
        "Create reactive state variables to hold users, loading, and error information.",
      snippet: `const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);`,
    },
    {
      title: "2. Fetch Users from JSONPlaceholder",
      description:
        "Use axios.get to fetch users asynchronously and update state.",
      snippet: `const fetchUsers = async () => {
  setLoading(true);
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
    setError(null);
  } catch (err) {
    setError("Failed to fetch users");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchUsers();
}, []);`,
      demo: () =>
        loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="text-danger">{error}</p>
        ) : (
          users.map((u) => <p key={u.id}>{u.name} - {u.email}</p>)
        ),
    },
    {
      title: "3. Add User",
      description: "Add a new user using axios.post and update state manually.",
      snippet: `const newUser = { name: "John Doe", email: "john@example.com" };
const res = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
setUsers(prevUsers => [...prevUsers, { ...newUser, id: res.data.id || Date.now() }]);`,
      demo: () => <Button onClick={addUser} className="me-2">Add User</Button>,
    },
    {
      title: "4. Update User",
      description:
        "Update an existing user using axios.put and manually update local state.",
      snippet: `const updatedData = { name: "Jane Doe", email: "jane@example.com" };
await axios.put(\`https://jsonplaceholder.typicode.com/users/\${id}\`, updatedData);
setUsers(prevUsers => prevUsers.map(user => user.id === id ? { ...user, ...updatedData } : user));`,
      demo: () =>
        users.length > 0 && (
          <Button onClick={() => updateUser(users[0].id)} className="me-2">Update First User</Button>
        ),
    },
    {
      title: "5. Delete User",
      description:
        "Delete a user using axios.delete and remove from local state manually.",
      snippet: `await axios.delete(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
setUsers(prevUsers => prevUsers.filter(user => user.id !== id));`,
      demo: () =>
        users.length > 0 && (
          <Button variant="danger" onClick={() => deleteUser(users[0].id)}>Delete First User</Button>
        ),
    },
  ];

  // ------------------- BACKEND TUTORIAL STEPS -------------------
  const backendSteps = [
    {
      title: "1. Backend: Folder Structure",
      description:
        "Organize backend with config (DB), models, routes, controllers, and server.js.",
      snippet: `backend/
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── users.js
├── controllers/
│   └── userController.js
└── server.js`,
    },
    {
      title: "2. Backend: DB Connection (config/db.js)",
      description:
        "Separate MongoDB connection in config/db.js.",
      snippet: `const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fullstack', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  }
};

module.exports = connectDB;`,
    },
    {
      title: "3. Backend: User Model (models/User.js)",
      description: "Define user schema with Mongoose.",
      snippet: `const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('User', UserSchema);`,
    },
    {
      title: "4. Backend: Controller Functions (controllers/userController.js)",
      description: "Separate CRUD logic into controller file.",
      snippet: `const User = require('../models/User');

// Get all users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Add new user
exports.addUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
};

// Update user
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

// Delete user
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};`,
    },
    {
      title: "5. Backend: Routes (routes/users.js)",
      description: "Define CRUD endpoints using Express router.",
      snippet: `const express = require('express');
const router = express.Router();
const { getUsers, addUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/', getUsers);
router.post('/', addUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;`,
    },
    {
      title: "6. Backend: server.js Setup",
      description:
        "Connect MongoDB, use middleware, mount routes, and start server.",
      snippet: `const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start server
app.listen(5000, () => console.log('Server running on port 5000'));`,
    },
  ];

  return (
    <Container className="my-5">
      <h2 className="mb-4">React + Node.js + MongoDB CRUD Tutorial (Step-by-Step)</h2>

      {/* Frontend Section */}
      <h3 className="mb-3 text-primary">Frontend Section</h3>
      {frontendSteps.map((step, idx) => (
        <Card key={idx} className="mb-4 shadow-sm">
          <Card.Body>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
              {step.snippet}
            </SyntaxHighlighter>
            {step.demo && <div className="mt-3">{step.demo()}</div>}
          </Card.Body>
        </Card>
      ))}

      {/* Backend Section */}
      <h3 className="mb-3 text-success">Backend Section</h3>
      {backendSteps.map((step, idx) => (
        <Card key={idx} className="mb-4 shadow-sm">
          <Card.Body>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
            <SyntaxHighlighter language="javascript" style={oneDark}>
              {step.snippet}
            </SyntaxHighlighter>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default FullStackTutorialPage;
