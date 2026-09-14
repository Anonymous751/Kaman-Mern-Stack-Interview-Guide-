
import mongoose from "mongoose";

import getGridFSBucket from "../utils/gridFs.js";

import Blog from "../../../Models/blogModel/Blog.js";


// ============================================================
// CREATE BLOG
// ============================================================

export const createBlog = async (req, res) => {
    try {

        // Check if image was uploaded
        if (!req.file) {
            return res.status(400).json({
                message: "Featured image is required",
            });
        }


        // Get GridFS bucket
        const bucket = getGridFSBucket();


        // Create a unique file ID for GridFS
        const fileId = new mongoose.Types.ObjectId();


        // Create GridFS upload stream
        const uploadStream = bucket.openUploadStream(
            req.file.originalname,
            {
                id: fileId,
                contentType: req.file.mimetype,
            }
        );


        // Handle upload error
        uploadStream.on("error", (error) => {

            console.error("GridFS upload error:", error);

            return res.status(500).json({
                message: "Image upload failed",
            });

        });


        // When image upload finishes
        uploadStream.on("finish", async () => {

            try {

                // Convert comma-separated tags into an array
                const tags = req.body.tags
                    ? req.body.tags
                        .split(",")
                        .map((tag) => tag.trim())
                        .filter(Boolean)
                    : [];


                // Create blog document
                const blog = await Blog.create({

                    title: req.body.title,

                    slug: req.body.slug,

                    category: req.body.category,

                    author: req.body.author,

                    description: req.body.description,

                    content: req.body.content,

                    tags,

                    featuredImage: {
                        fileId: fileId,
                        filename: req.file.originalname,
                        contentType: req.file.mimetype,
                    },

                    status: req.body.status || "draft",

                });


                return res.status(201).json({

                    message: "Blog created successfully",

                    blog,

                });


            } catch (error) {

                console.error(
                    "Blog creation error:",
                    error
                );


                // Duplicate slug
                if (error.code === 11000) {

                    return res.status(409).json({

                        message:
                            "A blog with this slug already exists. Please choose a different slug.",

                    });

                }


                return res.status(500).json({

                    message: "Failed to create blog",

                });

            }

        });


        // Write image buffer to GridFS
        uploadStream.end(req.file.buffer);


    } catch (error) {

        console.error(
            "Create blog error:",
            error
        );


        return res.status(500).json({

            message: "Failed to create blog",

        });

    }
};



// ============================================================
// GET ALL BLOGS
// ============================================================

export const getBlogs = async (req, res) => {

    try {

        // Get all blogs from MongoDB
        const blogs = await Blog.find()
            .sort({ createdAt: -1 });


        return res.status(200).json({

            success: true,

            count: blogs.length,

            blogs,

        });


    } catch (error) {

        console.error(
            "❌ Get blogs error:",
            error
        );


        return res.status(500).json({

            success: false,

            message: "Failed to fetch blogs",

        });

    }

};



// ============================================================
// GET BLOG IMAGE FROM GRIDFS
// ============================================================

export const getBlogImage = async (req, res) => {

    try {

        const { fileId } = req.params;


        // ----------------------------------------------------
        // Validate ObjectId
        // ----------------------------------------------------

        if (!mongoose.Types.ObjectId.isValid(fileId)) {

            return res.status(400).json({

                message: "Invalid image file ID",

            });

        }


        // ----------------------------------------------------
        // Convert fileId to ObjectId
        // ----------------------------------------------------

        const objectId = new mongoose.Types.ObjectId(fileId);


        // ----------------------------------------------------
        // Get GridFS bucket
        // ----------------------------------------------------

        const bucket = getGridFSBucket();


        // ----------------------------------------------------
        // IMPORTANT:
        // Bucket name is "uploads"
        //
        // Therefore GridFS uses:
        //
        // uploads.files
        // uploads.chunks
        // ----------------------------------------------------

        const file = await mongoose.connection.db
            .collection("uploads.files")
            .findOne({
                _id: objectId,
            });


        // ----------------------------------------------------
        // File not found
        // ----------------------------------------------------

        if (!file) {

            console.log(
                "❌ GridFS file not found:",
                fileId
            );

            return res.status(404).json({

                message: "Image not found",

            });

        }


        // ----------------------------------------------------
        // Set image content type
        // ----------------------------------------------------

        res.set(
            "Content-Type",
            file.contentType
        );


        // ----------------------------------------------------
        // Optional caching
        // ----------------------------------------------------

        res.set(
            "Cache-Control",
            "public, max-age=31536000"
        );


        // ----------------------------------------------------
        // Create GridFS download stream
        // ----------------------------------------------------

        const downloadStream =
            bucket.openDownloadStream(objectId);


        // ----------------------------------------------------
        // Handle download error
        // ----------------------------------------------------

        downloadStream.on("error", (error) => {

            console.error(
                "❌ GridFS download error:",
                error
            );


            if (!res.headersSent) {

                return res.status(500).json({

                    message: "Failed to load image",

                });

            }

        });


        // ----------------------------------------------------
        // Send image to browser
        // ----------------------------------------------------

        downloadStream.pipe(res);


    } catch (error) {

        console.error(
            "❌ Get blog image error:",
            error
        );


        if (!res.headersSent) {

            return res.status(500).json({

                message: "Failed to load image",

            });

        }

    }

};
