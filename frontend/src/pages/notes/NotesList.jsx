import React, { useState } from "react";
import { Container, Accordion, Badge, Row, Col, Form } from "react-bootstrap";
import { notesData } from "./notesData";
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

const NotesList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All"); // ✅ New state
  let filteredNotes = [];

  // ✅ Safe filtering (categories + topics)
  try {
    const query = searchQuery.toLowerCase();

    filteredNotes = notesData
      .map((section) => {
        const filteredTopics = section.topics.filter((topic) => {
          const matchesSearch =
            topic.title.toLowerCase().includes(query) ||
            topic.explanation?.toLowerCase().includes(query) ||
            section.category.toLowerCase().includes(query);

          const matchesPriority =
            priorityFilter === "All" || topic.priority === priorityFilter;

          return matchesSearch && matchesPriority;
        });

        return filteredTopics.length
          ? { ...section, topics: filteredTopics }
          : null;
      })
      .filter(Boolean);
  } catch (error) {
    console.error("Notes search error:", error);
    filteredNotes = [];
  }

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="text-center fw-bold mb-3">
          📘 Full MERN Notes (Interview Focused)
        </h2>

        <PriorityLegend />

        {/* 🔍 Search + Priority Filter in one row */}
        <Row className="mb-4">
          <Col md={6}>
            <SearchFilter
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search notes by topic, explanation, or category..."
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
        {filteredNotes.map((section, index) => (
          <div key={index} className="mb-4">
            <h4 className="fw-bold text-primary mb-3">{section.category}</h4>

            <Accordion alwaysOpen>
              {section.topics.map((topic) => (
                <Accordion.Item eventKey={topic.id} key={topic.id}>
                  <Accordion.Header className="fw-bold d-flex justify-content-between align-items-center">
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
                  </Accordion.Header>

                  <Accordion.Body>
                    <p className="text-muted">{topic.explanation}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        ))}

        {/* ❌ Topic Not Found */}
        {filteredNotes.length === 0 && (
          <h1 className="text-center text-muted mt-5">
            ❌ Topic Not Found
          </h1>
        )}
      </FadeScrollWrapper>
    </Container>
  );
};

export default NotesList;
