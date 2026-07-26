// src/pages/web/WebTopicsDetailPage.jsx

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import BackButton from "../../../components/BackButton";
import FadeScrollWrapper from "../../../components/FadeScrollWrapper";
import { getWebTopicDetail } from "../api/apis";

export default function WebTopicsDetailPage() {
  const { slug } = useParams(); // how-web-works
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

   useEffect(() => {
    const fetchTopic = async () => {
      try {
        const data = await getWebTopicDetail(slug);
        setTopic(data);
      } catch {
        setError("Topic not found");
      } finally {
        setLoading(false);
      }
    };

    fetchTopic();
  }, [slug]);

  if (loading)
    return <h2 className="text-center mt-5">Loading...</h2>;

  if (error)
    return <h2 className="text-danger text-center mt-5">{error}</h2>;

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "12px",
      }}
    >
      {/* Top Back Button */}
      <div style={{ marginBottom: "30px" }}>
        <FadeScrollWrapper>
          <BackButton to="/web" label="Back to Web Topics" />
        </FadeScrollWrapper>
      </div>

      {/* Title */}
      <FadeScrollWrapper>
        <h1
          style={{
            color: "#0d6efd",
            fontWeight: "700",
            marginBottom: "25px",
            textAlign: "center",
          }}
        >
          {topic.title}
        </h1>
      </FadeScrollWrapper>

      {/* Content Renderer */}
      <FadeScrollWrapper>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
          }}
        >
          {topic.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index}>{block.text}</p>;

              case "heading":
                return <h2 key={index}>{block.text}</h2>;

              case "list":
                return (
                  <ul key={index}>
                    {block.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                );

              case "code":
                return (
                  <pre key={index}>
                    <code>{block.code}</code>
                  </pre>
                );

              case "qa":
                return (
                  <div key={index} style={{ marginBottom: "15px" }}>
                    <strong>Q:</strong> {block.question}
                    <br />
                    <strong>A:</strong> {block.answer}
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
        <div style={{ marginTop: "30px" }}>
          <BackButton to="/web" label="Back to Web Topics" />
        </div>
      </FadeScrollWrapper>
    </div>
  );
}
