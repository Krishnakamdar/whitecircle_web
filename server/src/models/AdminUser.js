import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("AdminUser", adminUserSchema);
