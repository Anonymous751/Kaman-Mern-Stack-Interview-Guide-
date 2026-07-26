// src/routes/webTopicRoutes.js
import express from "express";
import { getAllWebTopics, getWebTopicDetail } from "../controllers/webTopicController.js";

const router = express.Router();

// GET all web topics (summary)
router.get("/wtopics", getAllWebTopics);

// GET single web topic detail
router.get("/wtopicsdetail/:path", getWebTopicDetail);

export default router;
