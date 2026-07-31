import { useState, useEffect, memo, useMemo, useCallback } from "react";
import { Container, Accordion, Badge, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import PriorityLegend from "../../components/PriorityLegend.jsx";
import FadeScrollWrapper from "../../components/FadeScrollWrapper.jsx";
import SearchFilter from "../../components/SearchFilter.jsx";
import { getFrontendTopics } from "./api/api.jsx";


// 🎨 Badge color function
const getBadgeColor = (priority) => {
  switch (priority) {
    case "Compulsory": return "danger";
    case "High": return "warning";
    case "Medium": return "info";
    case "Low": return "secondary";
    default: return "secondary";
  }
};

// 🚀 Optimized Topic Row
const TopicRow = memo(({ topic, index }) => (
  <Accordion.Item eventKey={topic._id}>
    <Accordion.Header className="fw-bold d-flex align-items-center gap-2">
      <strong>{index + 1}.</strong>
      <span>{topic.title}</span>
      {topic.priority && (
        <Badge
          bg={getBadgeColor(topic.priority)}
          className={getBadgeColor(topic.priority) === "warning" ? "text-dark ms-2" : "ms-2"}
        >
          {topic.priority}
        </Badge>
      )}
    </Accordion.Header>
    <Accordion.Body>
      <p className="text-muted mb-2">{topic.explanation}</p>
      <Link
        to={topic.path}
        className="btn btn-primary btn-sm"
      >
        Open Topic
      </Link>
    </Accordion.Body>
  </Accordion.Item>
));

// 🔹 Fallback data for instant render
const fallbackTopics = [
  { _id: "1", title: "HTML Basics", path: "/frontend/html-basics", explanation: "Learn semantic HTML.", priority: "Compulsory" },
  { _id: "2", title: "CSS Fundamentals", path: "/frontend/css-fundamentals", explanation: "Understand styling basics.", priority: "High" },
  { _id: "3", title: "JavaScript Basics", path: "/frontend/js-basics", explanation: "Variables, functions, loops.", priority: "Medium" },
];

export default function FrontendTopicsPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  // ⚡ Fetch API once
  useEffect(() => {
    const loadTopics = async () => {
      try {
        setLoading(true);

        const data = await getFrontendTopics();

        setTopics(data);
        sessionStorage.setItem("frontendTopics", JSON.stringify(data));
      } catch (error) {
        console.error("Failed to load frontend topics:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTopics();
  }, []);
  // 🔍 Filter topics
  const filteredTopics = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return topics.filter((topic, index) => {
      const matchesSearch = topic.title.toLowerCase().includes(query) || (index + 1).toString().includes(query);
      const matchesPriority = priorityFilter === "All" || topic.priority === priorityFilter;
      return matchesSearch && matchesPriority;
    });
  }, [topics, searchQuery, priorityFilter]);

  // 🔹 Visible topics for lazy load
  const visibleTopics = useMemo(() => filteredTopics.slice(0, visibleCount), [filteredTopics, visibleCount]);

  // 🔹 Load more topics
  const loadMore = useCallback(() => setVisibleCount((prev) => prev + 20), []);

  // 🧲 Infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (scrollTop + windowHeight >= documentHeight - 200 && visibleCount < filteredTopics.length) {
        loadMore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore, visibleCount, filteredTopics.length]);

  return (
    <Container className="my-5">
      {/* 🎯 Header */}
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">Frontend Topics (Interview Friendly)</h2>
        <PriorityLegend />
      </FadeScrollWrapper>

      {/* 🔍 Filters */}
      <Row className="mb-3 g-2">
        <Col md={6}>
          <SearchFilter value={searchQuery} onChange={setSearchQuery} placeholder="Search frontend topics by title or number..." />
        </Col>
        <Col md={6}>
          <Form.Select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)}>
            <option value="All">All Priorities</option>
            <option value="Compulsory">Compulsory</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Col>
      </Row>

      {/* ⚡ Topics */}
      <Accordion alwaysOpen>
        {visibleTopics.map((topic, index) => <TopicRow key={topic._id} topic={topic} index={index} />)}
      </Accordion>

      {/* ❌ No results */}
      {filteredTopics.length === 0 && <h4 className="text-center text-muted mt-5">❌ Topic Not Found</h4>}

      {/* 🔄 Infinite loader */}
      {visibleCount < filteredTopics.length && <p className="text-center mt-3 text-muted">Loading more topics...</p>}

      {/* 🌐 Initial API loading */}
      {loading && <p className="text-center mt-3 text-muted">Updating topics...</p>}
    </Container>
  );
}
