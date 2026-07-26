import React, { useState, memo } from "react";
import { Container, Accordion, Badge, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { databaseSections } from "./databaseTopics";
import PriorityLegend from "../../components/PriorityLegend";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";

// Map priority → Bootstrap colors
const getBadgeColor = (priority) => {
  switch (priority) {
    case "Compulsory":
      return "danger";
    case "High":
      return "warning";
    case "Medium":
      return "info";
    case "Low":
      return "secondary";
    default:
      return "secondary";
  }
};

// Memoized topic card
const TopicCard = memo(({ topic }) => (
  <div className="mb-4 p-3 border rounded">
    <h5 className="fw-semibold mb-2">
      {topic.title}
      {topic.priority && (
        <Badge
          bg={getBadgeColor(topic.priority)}
          className={
            getBadgeColor(topic.priority) === "warning" ||
            getBadgeColor(topic.priority) === "info"
              ? "text-dark ms-2"
              : "ms-2"
          }
        >
          {topic.priority}
        </Badge>
      )}
    </h5>

    <p className="text-muted">{topic.explanation}</p>

    <Link to={topic.path} className="btn btn-primary btn-sm">
      Open Topic
    </Link>
  </div>
));

const Databases = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  let globalCounter = 1;
  const query = searchQuery.toLowerCase();

  // Filter sections + topics
  const filteredSections = databaseSections
    .map((section) => {
      const filteredTopics = section.topics.filter(
        (topic) => {
          const matchesSearch =
            topic.title.toLowerCase().includes(query) ||
            topic.explanation?.toLowerCase().includes(query);

          const matchesPriority =
            priorityFilter === "All" || topic.priority === priorityFilter;

          return matchesSearch && matchesPriority;
        }
      );

      return filteredTopics.length
        ? { ...section, topics: filteredTopics }
        : null;
    })
    .filter(Boolean);

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">
          Database Topics (Interview Friendly)
        </h2>

        <PriorityLegend />

        {/* 🔍 Search + Priority Filter in one row */}
        <Row className="mb-4">
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Search database topic's by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Col>
          <Col md={6}>
            <Form.Select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
            >
              <option value="All">All Priorities</option>
              <option value="Compulsory">Compulsory</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Accordion */}
        <Accordion alwaysOpen>
          {filteredSections.map((section, sectionIndex) => (
            <Accordion.Item
              eventKey={`section-${sectionIndex}`}
              key={`section-${sectionIndex}`}
            >
              <Accordion.Header>
                <span className="fw-bold">
                  <strong>{globalCounter++}.</strong> {section.sectionTitle}
                </span>
              </Accordion.Header>

              <Accordion.Body>
                {section.topics.map((topic) => (
                  <TopicCard key={topic.id} topic={topic} />
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Empty State */}
        {filteredSections.length === 0 && (
          <h1 className="text-center text-muted mt-5">
            ❌ Topic's Not Found
          </h1>
        )}
      </FadeScrollWrapper>
    </Container>
  );
};

export default Databases;
