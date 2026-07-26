import express from "express"
import { getAllTopics, getTopicDetail} from "../controllers/FTopicsController.js";


const router = express.Router();

router.get("/ftopicsList", getAllTopics);
router.get("/ftopicsdetail/:path", getTopicDetail);


export default router;
