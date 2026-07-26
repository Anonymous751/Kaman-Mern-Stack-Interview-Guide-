import { useState } from "react";
import { Container, Accordion, Badge, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { systemDesignSections } from "./systemDesignSections";
import PriorityLegend from "../../components/PriorityLegend";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";
import SearchFilter from "../../components/SearchFilter";

// Map priority to Bootstrap badge colors
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

const SystemDesignPage = () => {
  let globalCounter = 1;
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // Filter sections + topics safely
  const filteredSections = systemDesignSections
    .map((section) => {
      const filteredTopics = section.topics.filter((topic) => {
        const matchesSearch =
          topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          topic.explanation?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesPriority =
          priorityFilter === "All" || topic.priority === priorityFilter;

        return matchesSearch && matchesPriority;
      });

      return filteredTopics.length
        ? { ...section, topics: filteredTopics }
        : null;
    })
    .filter(Boolean);

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">
          System Design Topics (HLD + LLD + Interview Friendly)
        </h2>

        <PriorityLegend />

        {/* 🔍 Search + Priority Filter in one row */}
        <Row className="mb-4">
          <Col md={6}>
            <SearchFilter
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search system design topic's by name..."
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
      </FadeScrollWrapper>

      <FadeScrollWrapper>
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
                  <div key={topic.id} className="mb-4 p-3 border rounded">
                    <h5 className="fw-semibold d-flex align-items-center">
                      <span>{topic.title}</span>

                      {topic.priority && (
                        <Badge
                          bg={getBadgeColor(topic.priority)}
                          className={
                            getBadgeColor(topic.priority) === "warning"
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
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* ❌ Topic Not Found */}
        {filteredSections.length === 0 && (
          <h1 className="text-center text-muted mt-5">
            ❌ Topic's Not Found
          </h1>
        )}
      </FadeScrollWrapper>
    </Container>
  );
};

export default SystemDesignPage;
