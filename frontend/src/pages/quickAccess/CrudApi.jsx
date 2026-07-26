import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Steps with code examples
const steps = [
  {
    title: "1. Setup Backend Project",
    description:
      "Initialize Node.js project with npm and install required packages.",
    code: `// Initialize project
npm init -y

// Install packages
npm install express mongoose cors dotenv`
  },
  {
    title: "2. Setup MongoDB Connection",
    description:
      "Create config/db.js to connect MongoDB using Mongoose and environment variables.",
    code: `// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;`
  },
  {
    title: "3. Create Data Model",
    description: "Define a Mongoose schema for Student with name, email, age, city.",
    code: `// models/Student.js
import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  city: { type: String }
});

const Student = mongoose.model("Student", studentSchema);
export default Student;`
  },
  {
    title: "4. Setup Express Server",
    description: "Create server.js, add middleware and start server.",
    code: `// server.js
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));`
  },
  {
    title: "5. Create CRUD Routes",
    description: "Define routes for CRUD operations using express.Router.",
    code: `// routes/studentRoutes.js
import express from "express";
import { getStudents, getStudent, createStudent, updateStudent, deleteStudent } from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;`
  },
  {
    title: "6. Create Controllers",
    description: "Write functions to handle CRUD operations using Mongoose.",
    code: `// controllers/studentController.js
import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

export const getStudent = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

export const createStudent = async (req, res) => {
  const student = await Student.create(req.body);
  res.status(201).json(student);
};

export const updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Student deleted" });
};`
  },
  {
    title: "7. Connect Routes to Server",
    description: "Add routes to server.js",
    code: `// server.js
import studentRoutes from "./routes/studentRoutes.js";
app.use("/api/students", studentRoutes);`
  },
  {
    title: "8. Test Backend",
    description: "Use Postman to test all CRUD endpoints.",
    code: `// Example GET request
GET http://localhost:5000/api/students`
  },
  {
    title: "9. Setup Frontend",
    description: "Create React app, install axios, react-router-dom, react-bootstrap.",
    code: `npx create-react-app crud-app
cd crud-app
npm install axios react-router-dom react-bootstrap bootstrap`
  },
  {
    title: "10. Create Axios Instance",
    description: "Set up api/axiosInstance.js to make API calls easier.",
    code: `// api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api"
});

export default axiosInstance;`
  }
];

const frontendSteps = [
  {
    title: "11. Setup React Components",
    description: "Create components for AddStudent, EditStudent, StudentsList. Each component will manage its own state for form fields and API responses.",
    code: `// Example: AddStudent.jsx
import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/students", { name, email, age, city });
      console.log("Student added:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;`
  },
  {
    title: "12. List Students",
    description: "Create a component to fetch and display all students from backend using useEffect.",
    code: `// StudentsList.jsx
import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axiosInstance.get("/students");
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <ul>
      {students.map((s) => (
        <li key={s._id}>
          {s.name} - {s.email} - {s.age} - {s.city}
        </li>
      ))}
    </ul>
  );
}

export default StudentsList;`
  },
  {
    title: "13. Edit Student",
    description: "Create a form to edit student details using props and useParams to get student ID from URL.",
    code: `// EditStudent.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

function EditStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState({ name: "", email: "", age: "", city: "" });

  useEffect(() => {
    const fetchStudent = async () => {
      const res = await axiosInstance.get(\`/students/\${id}\`);
      setStudent(res.data);
    };
    fetchStudent();
  }, [id]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axiosInstance.put(\`/students/\${id}\`, student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={student.name} onChange={handleChange} />
      <input name="email" value={student.email} onChange={handleChange} />
      <input name="age" value={student.age} onChange={handleChange} />
      <input name="city" value={student.city} onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditStudent;`
  },
  {
    title: "14. Delete Student",
    description: "Add a delete button in the list to remove a student using axios DELETE method.",
    code: `// Inside StudentsList.jsx
const handleDelete = async (id) => {
  await axiosInstance.delete(\`/students/\${id}\`);
  setStudents(students.filter(s => s._id !== id));
};

// Usage in JSX
<button onClick={() => handleDelete(student._id)}>Delete</button>`
  },
  {
    title: "15. Routing Setup",
    description: "Use React Router to navigate between list, add, and edit pages.",
    code: `// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import StudentsList from "./pages/StudentsList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentsList />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/edit/:id" element={<EditStudent />} />
      </Routes>
    </Router>
  );
}

export default App;`
  }
];
const allSteps = [...steps, ...frontendSteps];

function CrudApi() {
  return (
    <Container className="py-5">
      <h1 className="text-center text-4xl font-bold mb-5 text-gray-800">
        CRUD API Steps - Beginner Friendly
      </h1>

      <Row className="g-4">
        {allSteps.map((step, index) => (
          <Col key={index} md={6} lg={4}>
            <Card className="shadow-lg hover:shadow-xl rounded-lg transition-all duration-300 h-full">
              <Card.Body>
                <Card.Title className="text-lg font-semibold mb-2 text-gray-700">
                  {step.title}
                </Card.Title>
                <Card.Text className="text-gray-600 mb-3">{step.description}</Card.Text>
                {step.code && (
                  <SyntaxHighlighter language="javascript" style={oneDark} wrapLongLines>
                    {step.code}
                  </SyntaxHighlighter>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CrudApi;
