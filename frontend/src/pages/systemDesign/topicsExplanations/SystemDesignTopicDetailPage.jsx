import { useLocation } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import { systemDesignTopics } from "./systemDesignTopicsData";
import FadeScrollWrapper from "../../../components/FadeScrollWrapper";

export default function SystemDesignTopicDetailPage() {
  const location = useLocation();
  const topic = systemDesignTopics.find((t) => t.path === location.pathname);

  if (!topic)
    return <h2 className="text-danger text-center mt-5">Topic not found</h2>;

  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "0 auto", backgroundColor: "#f9f9f9", borderRadius: "12px" }}>
      
      {/* Top Back Button */}
      <div style={{ marginBottom: "30px" }}>
        <FadeScrollWrapper>
        <BackButton
          to="/system-design"
          label="Back to System Design Topics"
        />
        </FadeScrollWrapper>
      </div>

      {/* Title */}
      <FadeScrollWrapper>
      <h1 style={{ color: "#0d6efd", fontWeight: "700", marginBottom: "25px", textAlign: "center" }}>
        {topic.title}
      </h1>
      </FadeScrollWrapper>

      {/* Explanation */}
      <FadeScrollWrapper>
      <div style={{ padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.05)" }}>
        {topic.explanation}
      </div>
      </FadeScrollWrapper>

      {/* Bottom Back Button */}
      <FadeScrollWrapper>
      <div style={{ marginTop: "30px" }}>
        <BackButton
          to="/system-design"
          label="Back to System Design Topics"
        />
      </div>
      </FadeScrollWrapper>
    </div>
  );
}
