import mongoose from "mongoose";

const ftopicListSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    path: {
      type: String,
      required: true,
      unique: true,   // used for routing & fetching details
      trim: true
    },

    explanation: {
      type: String,
      required: true
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Compulsory"],
      default: ""
    },

    order: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);
export default mongoose.model(
  "ftopic",
  ftopicListSchema,
  "ftopic" // 👈 EXACT collection name
);

