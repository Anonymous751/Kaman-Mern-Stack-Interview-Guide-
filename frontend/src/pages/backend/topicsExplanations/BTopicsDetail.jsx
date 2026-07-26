// src/pages/BackendTopicDetailPage.jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import FadeScrollWrapper from "../../../components/FadeScrollWrapper";
import { getBackendTopicDetail } from "../api/backendapi";

export default function BackendTopicDetailPage() {
  const location = useLocation();
  const slug = location.pathname.replace("/backend/", ""); // extract slug
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch topic data
  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const data = await getBackendTopicDetail(slug);
        setTopic(data);
      } catch (err) {
        setError("Topic not found");
      } finally {
        setLoading(false);
      }
    };
    fetchTopic();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error || !topic) {
    return <h2 className="text-danger mt-5">{error}</h2>;
  }

  return (
    <div style={{ padding: "40px 20px", maxWidth: "900px", margin: "0 auto" }}>
      {/* Top Back Button */}
      <div className="mb-4">
        <FadeScrollWrapper>
          <BackButton to="/backend" label="Back to Backend Topics" />
        </FadeScrollWrapper>
      </div>

      {/* Title */}
      <FadeScrollWrapper>
        <h1
          className="fw-bold text-primary"
          style={{ fontSize: "2.2rem", marginBottom: "25px" }}
        >
          {topic.title}
        </h1>
      </FadeScrollWrapper>

      <FadeScrollWrapper>
  <div className="mt-4">
    {topic.content?.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h3
              key={index}
              className="mt-6 mb-2 text-xl font-semibold border-b border-gray-200 pb-1"
            >
              {block.text}
            </h3>
          );

        case "paragraph":
          return (
            <p key={index} className="text-gray-700 leading-relaxed my-2">
              {block.text}
            </p>
          );

        case "list":
          return (
            <ul key={index} className="list-disc list-inside space-y-1 my-2">
              {block.items?.map((item, i) => {
                // Bold inline heading like "Event Loop:"
                const splitIndex = item.indexOf(":");
                if (splitIndex !== -1) {
                  const title = item.slice(0, splitIndex + 1);
                  const description = item.slice(splitIndex + 1).trim();
                  return (
                    <li key={i}>
                      <strong>{title}</strong> {description}
                    </li>
                  );
                }
                return <li key={i}>{item}</li>;
              })}
            </ul>
          );

        case "code":
          return (
            <pre
              key={index}
              className="bg-gray-100 p-4 rounded-md overflow-x-auto my-3"
            >
              <code>{block.code}</code>
            </pre>
          );

        case "qa":
          return (
            <div key={index} className="space-y-2 my-3">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-3">
                <strong>Q:</strong> {block.question}
              </div>
              <div className="bg-green-50 border-l-4 border-green-500 p-3">
                <strong>A:</strong> {block.answer}
              </div>
            </div>
          );

        default:
          return null;
      }
    })}
  </div>
</FadeScrollWrapper>

      {/* Bottom Back Button */}
      <FadeScrollWrapper>
        <div className="mt-5">
          <BackButton to="/backend" label="Back to Backend Topics" />
        </div>
      </FadeScrollWrapper>
    </div>
  );
}
