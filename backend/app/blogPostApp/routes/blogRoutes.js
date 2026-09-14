
import express from "express";

import { createBlog, getBlogImage, getBlogs } from "../controllers/blogController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

// Create a new blog with featured image
router.post(
    "/",
    upload.single("image"),
    createBlog
);
 
//  Get all Blogs
router.get( "/", getBlogs );

router.get("/image/:fileId", getBlogImage);

export default router;
