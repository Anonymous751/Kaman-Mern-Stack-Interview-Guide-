import React, { useState, useEffect, memo } from "react";
import {
  Container,
  Accordion,
  Badge,
  Button,
  Form,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import PriorityLegend from "../../components/PriorityLegend";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";
import SearchFilter from "../../components/SearchFilter";
import { getAllBackendTopics } from "./api/backendapi";

// Map priority → Bootstrap badge colors
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

// Single topic row
const TopicRow = memo(({ topic, index }) => (
  <Accordion.Item eventKey={topic._id}>
    <Accordion.Header className="fw-bold d-flex align-items-center gap-2">
      <strong>{index + 1}.</strong>
      <span>{topic.title}</span>

      {topic.priority && (
        <Badge
          bg={getBadgeColor(topic.priority)}
          className={
            ["warning", "info"].includes(getBadgeColor(topic.priority))
              ? "text-dark ms-2"
              : "ms-2"
          }
        >
          {topic.priority}
        </Badge>
      )}
    </Accordion.Header>

    <Accordion.Body>
      <p className="text-muted mb-1">{topic.explanation}</p>
      <Link to={topic.path} className="btn btn-primary btn-sm">
        Open Topic
      </Link>
    </Accordion.Body>
  </Accordion.Item>
));

export default function BackendTopicsPage() {
  const [topics, setTopics] = useState([]);
  const [visibleCount, setVisibleCount] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch backend topics
  useEffect(() => {
    setLoading(true);

    getAllBackendTopics()
      .then((data) => {
        setTopics(data);
      })
      .catch((err) => {
        console.error("❌ Failed to load backend topics", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  // 🔍 Filtering
  const filteredTopics = topics.filter((topic, index) => {
    const query = searchQuery.toLowerCase();

    const matchesSearch =
      topic.title.toLowerCase().includes(query) ||
      (index + 1).toString().includes(query);

    const matchesPriority =
      priorityFilter === "All" || topic.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  const visibleTopics = filteredTopics.slice(0, visibleCount);

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">
          Backend Topics (Interview Friendly)
        </h2>

        <PriorityLegend />

        {/* 🔄 Loading Spinner */}
        {loading && (
          <div className="d-flex justify-content-center align-items-center my-5">
            <Spinner
              animation="border"
              role="status"
              className="text-primary"
            />
          </div>
        )}

        {!loading && (
          <>
            {/* Search + Filter */}
            <Row className="mb-3">
              <Col md={6}>
                <SearchFilter
                  value={searchQuery}
                  onChange={setSearchQuery}
                  placeholder="Search backend topics..."
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
              {visibleTopics.map((topic, index) => (
                <TopicRow key={topic._id} topic={topic} index={index} />
              ))}
            </Accordion>

            {/* Not Found */}
            {filteredTopics.length === 0 && (
              <h5 className="text-center text-muted mt-4">
                ❌ Topic Not Found
              </h5>
            )}

            {/* Load More */}
            {visibleCount < filteredTopics.length && (
              <div className="text-center mt-3">
                <Button onClick={() => setVisibleCount((v) => v + 50)}>
                  Load More
                </Button>
              </div>
            )}
          </>
        )}
      </FadeScrollWrapper>
    </Container>
  );
}
