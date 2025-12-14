import mongoose from "mongoose";

const portfolioItemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    clientName: String,
    slug: { type: String, required: true, unique: true },
    challenge: String,
    process: [String],
    toolsUsed: [String],
    finalOutput: String,
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("PortfolioItem", portfolioItemSchema);
