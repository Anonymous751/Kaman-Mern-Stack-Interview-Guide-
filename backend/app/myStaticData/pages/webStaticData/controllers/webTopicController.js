// src/controllers/webTopicController.js

import wtopic from "../models/wtopic.js";
import wtopicDetail from "../models/wtopicDetail.js";


/**
 * ==================================================
 * GET ALL WEB TOPICS (SUMMARY)
 * ==================================================
 */
export const getAllWebTopics = async (req, res) => {
  // console.log("🔥 getAllWebTopics HIT");

  try {
    const topics = await wtopic.find({}).sort({ order: 1 });

    // console.log(`✅ Topics fetched: ${topics.length}`);

    res.status(200).json(topics);
  } catch (err) {
    // console.error("❌ getAllWebTopics error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * ==================================================
 * GET SINGLE WEB TOPIC DETAIL (ALWAYS FROM DB)
 * ==================================================
 */
export const getWebTopicDetail = async (req, res) => {
  try {
    const rawPath = req.params.path;
    const normalizedPath = `/web/${rawPath.replace(/\/$/, "")}`;

    // 🔥 ALWAYS HIT DATABASE
    const detail = await wtopicDetail
      .findOne({ path: normalizedPath })
      .populate("topic", "title priority path");

    if (!detail) {
      return res.status(404).json({
        title: "❌ Topic Not Found",
        content: []
      });
    }

    const response = {
      title: detail.topic.title,
      path: detail.topic.path,
      priority: detail.topic.priority,
      content: detail.content
    };

    res.status(200).json(response);
  } catch (err) {
    console.error("❌ getWebTopicDetail error:", err);
    res.status(500).json({
      title: "❌ Topic Not Found",
      content: []
    });
  }
};
