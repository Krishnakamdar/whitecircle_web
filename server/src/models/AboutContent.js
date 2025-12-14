import mongoose from "mongoose";

const aboutContentSchema = new mongoose.Schema(
  {
    story: String,
    vision: String,
    mission: String,
    values: [String],
    experienceAndAchievements: String
  },
  { timestamps: true }
);

export default mongoose.model("AboutContent", aboutContentSchema);
