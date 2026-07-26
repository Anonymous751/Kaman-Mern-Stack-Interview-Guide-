import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BackButton from "../../../components/BackButton";
import FadeScrollWrapper from "../../../components/FadeScrollWrapper.jsx";
import { getFrontendTopicDetail } from "../api/api.jsx";


export default function TopicDetailPage() {
  const location = useLocation();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);

  const slug = location.pathname
    .replace("/frontend/", "")
    .replace(/\/$/, "");

  useEffect(() => {
    setLoading(true);

    getFrontendTopicDetail(slug)
      .then(data => setTopic(data))
      .catch(() => setTopic({ notFound: true }))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <h2 className="mt-5 text-center">Loading...</h2>;

  if (topic?.notFound)
    return (
      <div className="text-center py-5">
        <h2 className="text-danger">❌ Topic Not Found</h2>
        <BackButton to="/frontend" label="Back to Frontend Topics" />
      </div>
    );

  return (
    <div className="container py-5">
      <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg shadow-sm p-6">

        <FadeScrollWrapper>
          <div className="mb-5">
            <BackButton to="/frontend" label="Back to Frontend Topics" />
          </div>
        </FadeScrollWrapper>

        <FadeScrollWrapper>
          <h1 className="text-center text-4xl font-bold text-indigo-600 mb-6">
            {topic.title}
          </h1>
        </FadeScrollWrapper>

        <FadeScrollWrapper>
          <div className="bg-white p-6 rounded-md shadow-inner space-y-4">

            {(!topic.content || topic.content.length === 0) && (
              <p className="text-slate-500 italic">
                No content available for this topic.
              </p>
            )}

            {topic.content?.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h3 key={index} className="mt-6 text-xl font-semibold border-b">
                      {block.text}
                    </h3>
                  );

                case "paragraph":
                  return <p key={index}>{block.text}</p>;

                case "list":
                  return (
                    <ul key={index} className="list-disc list-inside">
                      {block.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );

                case "code":
                  return (
                    <pre key={index} className="bg-gray-100 p-4 rounded">
                      <code>{block.code}</code>
                    </pre>
                  );

                case "qa":
                  return (
                    <div key={index}>
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

        <FadeScrollWrapper>
          <div className="mt-6">
            <BackButton to="/frontend" label="Back to Frontend Topics" />
          </div>
        </FadeScrollWrapper>

      </div>
    </div>
  );
}
