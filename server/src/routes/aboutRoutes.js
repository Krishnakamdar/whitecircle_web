import express from "express";
import { getAbout, upsertAbout } from "../controllers/aboutController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAbout);
router.post("/", protect, upsertAbout);

export default router;
