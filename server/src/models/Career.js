import mongoose from "mongoose";

const careerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    location: String,
    type: String,
    experience: String,
    description: String,
    isOpen: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Career", careerSchema);
