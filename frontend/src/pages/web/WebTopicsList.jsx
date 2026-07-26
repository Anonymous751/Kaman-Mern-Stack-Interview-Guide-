import React, { useState, useEffect } from "react";
import { Accordion, Container, Badge, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

import PriorityLegend from "../../components/PriorityLegend";
import FadeScrollWrapper from "../../components/FadeScrollWrapper";
import SearchFilter from "../../components/SearchFilter";
import { getWebTopics } from "./api/apis";


const getBadgeColor = (priority) => {
  switch (priority) {
    case "Compulsory": return "danger";
    case "High": return "warning";
    case "Medium": return "info";
    case "Low": return "secondary";
    default: return "secondary";
  }
};

const WebTopicsList = () => {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");

  useEffect(() => {
    const fetchTopics = async () => {
      setLoading(true);
      try {
        const data = await getWebTopics();
        setTopics(data);
      } catch (err) {
        setTopics([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const filteredTopics = topics.filter((topic) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      topic.title.toLowerCase().includes(query) ||
      (topic.explanation && topic.explanation.toLowerCase().includes(query));

    const matchesPriority =
      priorityFilter === "All" || topic.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  return (
    <Container className="my-5">
      <FadeScrollWrapper>
        <h2 className="mb-4 text-center fw-bold">
          Web Fundamentals (Interview Friendly)
        </h2>

        <PriorityLegend />

        <SearchFilter
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search web fundamentals by name..."
          priorityValue={priorityFilter}
          onPriorityChange={setPriorityFilter}
          showPriority={true}
        />
      </FadeScrollWrapper>


        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : filteredTopics.length > 0 ? (
          <Accordion alwaysOpen>
            {filteredTopics.map((topic, index) => (
              <Accordion.Item eventKey={topic._id} key={topic._id}>
                <Accordion.Header>
                  <span className="fw-bold">
                    <strong>{index + 1}.</strong> {topic.title}
                  </span>
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
                </Accordion.Header>

                <Accordion.Body>
                  <p className="text-muted">{topic.explanation}</p>
                  <Link to={topic.path} className="btn btn-primary btn-sm">
                    Open Topic
                  </Link>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <h1 className="text-center text-muted mt-5">
            ❌ Topic&apos;s Not Found
          </h1>
        )}
    </Container>
  );
};

export default WebTopicsList;
