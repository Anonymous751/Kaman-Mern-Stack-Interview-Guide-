
import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
    {
        // =============================
        // Basic Information
        // =============================

        title: {
            type: String,
            required: [true, "Blog title is required"],
            trim: true,
            minlength: [5, "Title must be at least 5 characters"],
            maxlength: [120, "Title cannot exceed 120 characters"],
        },

        slug: {
            type: String,
            required: [true, "Slug is required"],
            unique: true,
            trim: true,
            lowercase: true,
            match: [
                /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
                "Slug can only contain lowercase letters, numbers and hyphens",
            ],
        },

        category: {
            type: String,
            required: [true, "Category is required"],
            trim: true,
            enum: [
                "Technology",
                "Development",
                "Engineering",
                "Design",
                "DevOps",
            ],
        },

        author: {
            type: String,
            required: [true, "Author is required"],
            trim: true,
        },

        // =============================
        // Article
        // =============================

        description: {
            type: String,
            required: [true, "Description is required"],
            trim: true,
            minlength: [20, "Description must be at least 20 characters"],
            maxlength: [300, "Description cannot exceed 300 characters"],
        },

        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true,
            minlength: [50, "Content must be at least 50 characters"],
        },

        // =============================
        // Tags
        // =============================

        tags: {
            type: [String],
            required: [true, "At least one tag is required"],
            default: [],
        },

        // =============================
        // Featured Image
        // Stored in GridFS
        // =============================

        featuredImage: {
            fileId: {
                type: mongoose.Schema.Types.ObjectId,
                required: [true, "Featured image file ID is required"],
            },

            filename: {
                type: String,
                required: [true, "Featured image filename is required"],
                trim: true,
            },

            contentType: {
                type: String,
                required: [true, "Featured image content type is required"],
                enum: [
                    "image/jpeg",
                    "image/png",
                    "image/webp",
                ],
            },
        },

        // =============================
        // Publishing
        // =============================

        status: {
            type: String,
            enum: ["draft", "published"],
            default: "draft",
        },
    },
    {
        timestamps: true,
    }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
