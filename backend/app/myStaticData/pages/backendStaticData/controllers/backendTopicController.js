import backendTopic from "../models/backendTopic.js";
import backendTopicDetail from "../models/backendTopicDetail.js";

/**
 * ==================================================
 * GET ALL BACKEND TOPICS (SUMMARY)
 * ==================================================
 */
export const getAllBackendTopics = async (req, res) => {
  try {
    const topics = await backendTopic.find({}).sort({ order: 1 });
    res.status(200).json(topics);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * ==================================================
 * GET SINGLE BACKEND TOPIC DETAIL (ALWAYS FROM DB)
 * ==================================================
 */
export const getBackendTopicDetail = async (req, res) => {
  try {
    const rawPath = req.params.path;
    const normalizedPath = `/backend/${rawPath.replace(/\/$/, "")}`;

    const detail = await backendTopicDetail
      .findOne({ path: normalizedPath })
      .populate("topic", "title priority path");

    if (!detail) {
      return res.status(404).json({
        title: "❌ Topic Not Found",
        content: []
      });
    }

    const response = {
      title: detail.topic?.title || "Untitled Topic",
      path: detail.topic?.path || normalizedPath,
      priority: detail.priority || detail.topic?.priority || "Low",
      content: detail.content || []
    };

    res.status(200).json(response);
  } catch (err) {
    console.error("❌ getBackendTopicDetail error:", err);
    res.status(500).json({
      title: "❌ Topic Not Found",
      content: []
    });
  }
};
