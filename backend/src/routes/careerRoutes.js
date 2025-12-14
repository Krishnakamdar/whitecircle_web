import express from "express";
import {
  getCareers,
  createCareer,
  deleteCareer
} from "../controllers/careerController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCareers);
router.post("/", protect, createCareer);
router.delete("/:id", protect, deleteCareer);

export default router;




// import Career from "../models/Career.js";

// // @desc    Get all careers
// // @route   GET /api/careers
// // @access  Public
// export const getCareers = async (req, res) => {
//   try {
//     const careers = await Career.find().sort({ createdAt: -1 }); // latest first
//     res.status(200).json(careers);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Create a new career
// // @route   POST /api/careers
// // @access  Protected
// export const createCareer = async (req, res) => {
//   try {
//     const { title, location, type, experience, description, isOpen } = req.body;

//     if (!title) {
//       return res.status(400).json({ message: "Title is required" });
//     }

//     const newCareer = new Career({
//       title,
//       location,
//       type,
//       experience,
//       description,
//       isOpen,
//     });

//     const savedCareer = await newCareer.save();
//     res.status(201).json(savedCareer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // @desc    Delete a career
// // @route   DELETE /api/careers/:id
// // @access  Protected
// export const deleteCareer = async (req, res) => {
//   try {
//     const career = await Career.findById(req.params.id);
//     if (!career) {
//       return res.status(404).json({ message: "Career not found" });
//     }

//     await career.remove();
//     res.status(200).json({ message: "Career deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
