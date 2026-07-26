import ftopic from "../models/ftopic.js";
import fdetail from "../models/fdetail.js";

/**
 * ==================================================
 * GET ALL FRONTEND TOPICS (SUMMARY)
 * (Redis OPTIONAL – unchanged)
 * ==================================================
 */
export const getAllTopics = async (req, res) => {
  console.log("🔥 getAllTopics HIT");

  try {
    const topics = await ftopic.find({}).sort({ order: 1 });

    console.log(`✅ Topics fetched: ${topics.length}`);

    res.status(200).json(topics);
  } catch (err) {
    console.error("❌ getAllTopics error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

/**
 * ==================================================
 * GET SINGLE TOPIC DETAIL (ALWAYS FROM DB)
 * ==================================================
 */
export const getTopicDetail = async (req, res) => {
  try {
    const rawPath = req.params.path;
    const normalizedPath = `/frontend/${rawPath.replace(/\/$/, "")}`;

    // console.log("🔥 getTopicDetail HIT");
    // console.log("➡️ Requested path param:", rawPath);
    // console.log("➡️ Normalized DB path:", normalizedPath);

    // 🔥 ALWAYS HIT DATABASE
    const detail = await fdetail
      .findOne({ path: normalizedPath })
      .populate("topic", "title priority path");

    // console.log("📦 Raw fdetail result:", detail);

    if (!detail) {
      // console.warn("⚠️ No fdetail document found for path:", normalizedPath);
      return res.status(404).json({
        title: "❌ Topic Not Found",
        content: []
      });
    }

    // console.log("📄 Content blocks count:", detail.content?.length);

    const response = {
      title: detail.topic.title,
      path: detail.topic.path,
      priority: detail.topic.priority,
      content: detail.content
    };

    // console.log("✅ Final API response:", response);

    res.status(200).json(response);
  } catch (err) {
    // console.error("❌ getTopicDetail error:", err);
    res.status(500).json({
      title: "❌ Topic Not Found",
      content: []
    });
  }
};
