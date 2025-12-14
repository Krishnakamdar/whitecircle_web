import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    clientName: String,
    designation: String,
    company: String,
    message: { type: String, required: true },
    featured: { type: Boolean, default: true }
  },
  { timestamps: true }
);

export default mongoose.model("Testimonial", testimonialSchema);
