import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Whitecircle Group API running");
});

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/portfolio", portfolioRoutes);
app.use("/api/careers", careerRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/about", aboutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
