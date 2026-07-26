import express from "express"
import { getAllBackendTopics, getBackendTopicDetail } from "../controllers/backendTopicController.js";

const router = express.Router()


router.get("/backend/topics", getAllBackendTopics);
router.get("/backend/:path", getBackendTopicDetail);


export default router;
