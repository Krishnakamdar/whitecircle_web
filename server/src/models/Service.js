import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true },
    bannerDescription: String,
    whatWeDeliver: [String],
    process: [String],
    technologies: [String],
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
