import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    serviceInterested: String,
    budget: String,
    message: String
  },
  { timestamps: true }
);

export default mongoose.model("Lead", leadSchema);
