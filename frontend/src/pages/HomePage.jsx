import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";
import { Fade, OverlayTrigger, Tooltip } from "react-bootstrap";
import FadeScrollWrapper from "../components/FadeScrollWrapper";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

// Quick access tasks
const quickAccessTasks = [
  {
    title: "Crud Api (Jsonplaceholder)",
    path: "/crud-api",
    level: "Beginner",
    description:
      "Learn to perform CRUD operations on JSONPlaceholder API and understand REST principles.",
  },
  {
    title: "React Form Validation (Formik & Yup)",
    path: "/form-validation",
    level: "Beginner",
    description:
      "Implement dynamic form validation in React using Formik and Yup with error handling.",
  },
  {
    title: "Api Calling Using Backend",
    path: "/api-calling",
    level: "Intermediate",
    description:
      "Connect React frontend with backend APIs and handle responses efficiently.",
  },
  {
    title: "Search + Filter, Pagination (React)",
    path: "/search-filter",
    level: "Intermediate",
    description:
      "Implement search, filter, and pagination functionalities on frontend data.",
  },
  {
    title: "Search + Filter, Pagination (Backend)",
    path: "/pagination",
    level: "Intermediate",
    description:
      "Implement backend-level search, filter, and pagination using Node.js or Express.",
  },
  {
    title: "File Upload (Multer + GridFS)",
    path: "/file-upload",
    level: "Intermediate",
    description:
      "Upload and manage files in backend using Multer and GridFS efficiently.",
  },
  {
    title: "Authentication (JWT, Session Based)",
    path: "/jwt-auth",
    level: "Advanced",
    description:
      "Learn JWT and session-based authentication, protect routes, and secure APIs.",
  },
  {
    title: "Role Based Access Control",
    path: "/rbac",
    level: "Advanced",
    description:
      "Implement role-based permissions to secure different user actions and data.",
  },
];

// Map level to badge color
const getBadgeColor = (level) => {
  switch (level) {
    case "Beginner":
      return "success";
    case "Intermediate":
      return "warning";
    case "Advanced":
      return "danger";
    default:
      return "secondary";
  }
};

function HomePage() {
   const typedRef = useRef(null);

  // Initialize Typed.js
  useEffect(() => {
  const typed = new Typed(typedRef.current, {
    strings: [
  "MERN Interview Guide",
  "Real Interview Tasks",
  "Full Stack Preparation"
],
    typeSpeed: 80,
    backSpeed: 100,
    backDelay: 1200,   // pause before deleting
    loop: true,        // 🔁 infinite loop
    showCursor: true,
    cursorChar: "|",
    smartBackspace: true,
    showCursor: false
  });

  return () => {
    typed.destroy();
  };
}, []);

  return (
    <Container className=" py-5">
      {/* ---------------- Hero Section ---------------- */}
      <FadeScrollWrapper>
        <div
          id="home"
          className="text-center mb-5 py-6 px-4 bg-gray-100 rounded-xl shadow-lg"
        >
          <h1 ref={typedRef} style={{ minHeight: "50px" }} className="text-5xl md:text-6xl fw-bold text-gray-800 mb-3">

          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-3 max-w-3xl mx-auto">
            Boost your MERN skills with real interview tasks. Practice, revise,
            and ace your technical rounds with step-by-step guidance.
          </p>

          <div className="flex justify-center items-center gap-6 flex-wrap my-8">
            {[
              {
                src: "/images/mongodb.png",
                alt: "MongoDB",
                tooltip: "MongoDB",
              },
              {
                src: "/images/express.png",
                alt: "Express",
                tooltip: "Express.js",
              },
              { src: "/images/react.png", alt: "React", tooltip: "React" },
              {
                src: "/images/nodejs.webp",
                alt: "Node.js",
                tooltip: "Node.js",
              },
            ].map((tech, idx) => (
              <OverlayTrigger
                key={idx}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${tech.alt}`}>{tech.tooltip}</Tooltip>
                }
              >
                <img
                  src={tech.src}
                  alt={tech.alt}
                  className="h-16 md:h-20 cursor-pointer slide-fade transition-transform duration-300 ease-in-out hover:scale-110"
                  draggable="false"
                />
              </OverlayTrigger>
            ))}
          </div>

          <Button
            as={Link}
            to="/mern-projects"
            className="
    px-4 py-2 text-lg font-semibold
    bg-primary text-white
    border border-black
    rounded-lg
    transform transition duration-300 ease-out
    hover:scale-105 hover:shadow-lg hover:brightness-110
    active:scale-95 active:brightness-90
  "
          >
            Explore Projects
          </Button>
        </div>
      </FadeScrollWrapper>

      {/* ---------------- Quick Access Tasks ---------------- */}
      <FadeScrollWrapper>
        <h3 id="quick-access" className="font-semibold text-gray-800 mb-4 mt-5">
          Quick Access Tasks
        </h3>
        <Row className="g-4">
          {quickAccessTasks.map((task, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                className="shadow-md rounded-xl h-100 position-relative border-0 transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
                style={{ minHeight: "250px", paddingTop: "2rem" }}
              >
                {task.level && (
                  <Badge
                    bg={getBadgeColor(task.level)}
                    className="position-absolute top-3 end-3 text-nowrap"
                    style={{ fontSize: "0.85rem", padding: "0.35em 0.55em" }}
                  >
                    {task.level}
                  </Badge>
                )}
                <Card.Body className="d-flex flex-column justify-content-between p-4">
                  <div>
                    <Card.Title className="text-lg font-semibold text-gray-700 mb-2">
                      {task.title}
                    </Card.Title>
                    <Card.Text className="text-gray-600 text-sm">
                      {task.description}
                    </Card.Text>
                  </div>
                  <Button
                    as={Link}
                    to={task.path}
                    variant="primary"
                    className="mt-3 hover:scale-105 transition-transform duration-300"
                  >
                    View Steps
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </FadeScrollWrapper>

      {/* ---------------- What's Inside ---------------- */}
      <FadeScrollWrapper>
        <div className="mt-5 p-5 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">What’s Inside?</h3>
          <Row className="g-4">
            <Col md={6}>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>10+ real MERN interview tasks</li>
                <li>Step-by-step guidance for each task</li>
                <li>Minimal code snippets for faster learning</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Backend + Frontend + DB + System-Design + Cloud + Deployment
                </li>
                <li>No fluff, only what's relevant for interviews</li>
                <li>Designed for fresher & 1-year experience level</li>
              </ul>
            </Col>
          </Row>
        </div>

        {/* ---------------- Pro Tip ---------------- */}
        <div className="mt-5 p-4 bg-indigo-50 rounded-lg shadow-sm border-l-4 border-indigo-400">
          <h5 className="font-semibold text-indigo-700 mb-2">Pro Tip</h5>
          <p className="text-gray-700">
            Complete Beginner tasks first, then Intermediate, and finally
            Advanced. This structure helps you build confidence and cover all
            interview expectations efficiently.
          </p>
        </div>
      </FadeScrollWrapper>

      {/* ---------------- MERN Roadmap ---------------- */}
      <FadeScrollWrapper>
        <div className="mt-6 p-6 bg-gray-100 rounded-xl shadow-md">
  <h3 className="font-semibold text-gray-800 mb-6 text-center text-xl">
    MERN Roadmap
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-6 relative">
    {[
      "JavaScript Fundamentals",
      "Advanced ES6+",
      "Asynchronous JS (Async/Await)",
      "React Core + Hooks",
      "React Router",
      "State Management (Context / Redux Toolkit)",
      "Node.js Core (Event Loop)",
      "Express Middleware & Routing",
      "REST API Architecture (MVC)",
      "MongoDB + Mongoose",
      "Authentication (JWT, Cookies)",
      "Authorization (RBAC)",
      "File Uploading (Multer / Cloudinary)",
      "Search, Filter & Pagination API",
      "Error Handling Architecture",
      "Optimizing MongoDB (Indexes & Aggregation)",
      "Full-Stack Deployment (Render, Railway, Vercel)",
    ].map((step, i, arr) => (
      <div key={i} className="flex items-center">

        {/* Roadmap Card */}
        <div
          className="
            px-5 py-2 bg-white rounded-xl shadow-md
            transition-all duration-300
            cursor-pointer
            hover:scale-105 hover:shadow-2xl
            relative group
            border border-gray-200
            flex items-center gap-3
          "
          style={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}
        >
          {/* Number Badge */}
          <div
            className="
              w-7 h-7 rounded-full bg-blue-500
              text-white text-sm flex items-center justify-center
              font-semibold shadow
            "
          >
            {i + 1}
          </div>

          <p className="font-medium text-gray-800">{step}</p>

          {/* Glow */}
          <div
            className="
              absolute inset-0 rounded-xl opacity-0
              group-hover:opacity-100 transition-all duration-300
              blur-md
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(0,200,255,0.4), rgba(0,120,255,0.4))",
            }}
          ></div>
        </div>

        {/* SVG STROKE LINE – hidden on mobile */}
        {i !== arr.length - 1 && (
          <svg
            width="60"
            height="20"
            viewBox="0 0 60 20"
            className="mx-2 hidden sm:block"
          >
            <path
              d="M5 10 H55"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
              className="stroke-line"
            />
          </svg>
        )}
      </div>
    ))}
  </div>
</div>

<style>
{`
.stroke-line {
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  animation: drawLine 0.9s ease-in-out forwards;
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}
`}
</style>


        {/* ---------------- Why MERN ---------------- */}
        <div className="mt-6 p-5 bg-white rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">Why MERN?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Single language (JavaScript) across the full stack</li>
            <li>Fast, real-time web app development</li>
            <li>Highly scalable Node.js architecture</li>
            <li>Mongoose makes database modeling easier</li>
            <li>Perfect for API-driven apps</li>
          </ul>
        </div>

        {/* ---------------- Mini Quiz ---------------- */}
        <div className="mt-6 p-5 bg-indigo-50 rounded-xl shadow-sm">
          <h4 className="font-semibold text-indigo-700 mb-3">
            Quick MERN Quiz
          </h4>
          <p className="text-gray-700 mb-3">
            Which part of MERN handles the backend?
          </p>
          <Button
            variant="outline-dark"
            className="me-2"
            onClick={() =>
              alert("Correct! Node.js + Express handle the backend.")
            }
          >
            Node + Express
          </Button>
          <Button
            variant="outline-dark"
            onClick={() => alert("Incorrect. React is frontend!")}
          >
            React
          </Button>
        </div>
      </FadeScrollWrapper>

      {/* ---------------- Real Interview Questions ---------------- */}
      <FadeScrollWrapper>
        <div className="mt-6 p-5 bg-white rounded-xl shadow-md">
          <h3 className="font-semibold text-gray-800 mb-3">
            Real Company MERN Questions
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Explain the Node.js event loop.</li>
            <li>Difference between state, props, and context in React.</li>
            <li>What is middleware in Express?</li>
            <li>How does MongoDB store data internally?</li>
            <li>Explain JWT authentication flow.</li>
          </ul>
        </div>

        {/* ---------------- MERN Project Ideas ---------------- */}
        <div className="mt-6 p-5 bg-gray-100 rounded-xl shadow-md">
          <FadeScrollWrapper>
            <h3 className="font-semibold text-gray-800 mb-3">
              Best MERN Project Ideas
            </h3>

            <h5 className="font-semibold text-gray-700 mt-3 mb-1">Beginner</h5>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Todo App with Drag-and-Drop</li>
              <li>Blog Platform (User Posts, Comments, Likes)</li>
            </ul>

            <h5 className="font-semibold text-gray-700 mt-3 mb-1">
              Intermediate
            </h5>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Authentication System (JWT + Refresh Token + Role-Based Access)
              </li>
              <li>File Sharing App (Upload/Download with Multer/GridFS)</li>
            </ul>

            <h5 className="font-semibold text-gray-700 mt-3 mb-1">Advanced</h5>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Project Management App (Tasks, Teams, Deadlines, Kanban Boards)
              </li>
              <li>Realtime Chat App (Socket.io + WebSockets)</li>
            </ul>

            <h5 className="font-semibold text-gray-700 mt-3 mb-1">
              Professional
            </h5>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>E-commerce App (Products, Cart, Payments)</li>
              <li>
                Admin Dashboard with Charts (Data Visualization + Analytics)
              </li>
            </ul>
          </FadeScrollWrapper>
        </div>

        {/* ---------------- Note ---------------- */}
        <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg shadow-sm">
          <FadeScrollWrapper>
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Start with Beginner projects to build
              confidence and understanding of the MERN stack. Gradually move to
              Intermediate and Advanced projects to master authentication, file
              handling, and real-time features. Professional projects will help
              you understand full-stack architecture, deployment, and complex
              business logic.
            </p>
          </FadeScrollWrapper>
        </div>
      </FadeScrollWrapper>
    </Container>
  );
}

export default HomePage;
