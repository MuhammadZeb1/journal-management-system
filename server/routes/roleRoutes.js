import express from "express";
import { requestExpert, approveExpert } from "../controllers/roleController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Author requests to become expert
router.post("/request-expert", authMiddleware, requestExpert);

// Admin approves expert request
router.post("/approve-expert/:userId", authMiddleware, approveExpert);

export default router;
