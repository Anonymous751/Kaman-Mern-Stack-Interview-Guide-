import mongoose from "mongoose";

const btopicDetailSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "backendTopic",
      required: true
    },

    path: {
      type: String,
      required: true,
      unique: true
    },

    content: [
      {
        type: {
          type: String,
          enum: ["paragraph", "heading", "list", "code", "qa"],
          required: true
        },

        text: String,

        items: [String],

        code: String,

        question: String,
        answer: String
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model(
  "backendTopicDetail",
  btopicDetailSchema,
  "backendTopicDetail" // 👈 EXACT collection name
);
