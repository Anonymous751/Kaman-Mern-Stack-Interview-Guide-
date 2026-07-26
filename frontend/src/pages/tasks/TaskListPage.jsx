import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import UserCardComponent from "./projects/todoListApp/components/UserCardComponent";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";

const projects = [
  {
    id: 1,
    title: "User Management CRUD ( json-server )",
    description: "CRUD users, Search/Filter, Pagination using json-server",
    link: "/projects/json-crud",
    level: "Beginner",
    badge: "success",
  },
  {
    id: 2,
    title: "Todo List App",
    description: "CRUD todos, Form Validation, Search, Filter, Pagination",
    link: "/projects/user-list-page",
    level: "Beginner",
    badge: "success",
  },
  {
    id: 3,
    title: "Blog Posts App",
    description: "CRUD posts, File Upload (Multer, GridFs Storage), Pagination",
    link: "/projects/blog-app",
    level: "Intermediate",
    badge: "warning",
  },
  {
    id: 4,
    title: "Complete Authentication App",
    description: "Register/Login, JWT authentication, Protected Routes",
    link: "#",
    level: "Intermediate",
    badge: "warning",
  },
  {
    id: 5,
    title: "RBAC Admin Dashboard",
    description:
      "Role-Based Access Control, CRUD users & roles, Search/Filter, File Upload",
    link: "#",
    level: "Advanced",
    badge: "danger",
  },
  {
    id: 6,
    title: "Chat App (WebSocket, Socket.io)",
    description:
      "Real-time messaging, online/offline status, chat rooms, message persistence",
    link: "#",
    level: "Advanced",
    badge: "danger",
  },
];

const TaskListPage = () => {
  const [levelFilter, setLevelFilter] = useState("All");

  // ✅ Filter projects by level
  const filteredProjects =
    levelFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.level.toLowerCase() === levelFilter.toLowerCase()
        );

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">MERN Projects</h2>

        {/* 🔽 Level Filter */}
        <Form className="mb-4 text-center">
          <Form.Select
            style={{ maxWidth: "300px", margin: "0 auto" }}
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value)}
          >
            <option value="All">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </Form.Select>
        </Form>
      </FadeScrollWrapper>

      <FadeScrollWrapper>
        <Row className="g-4">
          {filteredProjects.map((project) => (
            <UserCardComponent
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              link={project.link}
              level={project.level}
              badge={project.badge}
            />
          ))}
        </Row>

        {/* ❌ Project Not Found */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted mt-4">
            ❌ Project Not Found
          </p>
        )}
      </FadeScrollWrapper>
    </Container>
  );
};

export default TaskListPage;
