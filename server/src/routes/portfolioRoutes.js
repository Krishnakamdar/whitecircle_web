import express from "express";
import {
  getPortfolio,
  createPortfolioItem,
  deletePortfolioItem
} from "../controllers/portfolioController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPortfolio);
router.post("/", protect, createPortfolioItem);
router.delete("/:id", protect, deletePortfolioItem);

export default router;
