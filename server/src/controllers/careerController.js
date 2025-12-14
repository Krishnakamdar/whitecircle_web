import Career from "../models/Career.js";

export const getCareers = async (req, res) => {
  try {
    const careers = await Career.find().sort({ createdAt: -1 });
    res.json(careers);
  } catch {
    res.status(500).json({ message: "Error fetching careers" });
  }
};

export const createCareer = async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json(career);
  } catch {
    res.status(400).json({ message: "Error creating career" });
  }
};

export const deleteCareer = async (req, res) => {
  try {
    await Career.findByIdAndDelete(req.params.id);
    res.json({ message: "Career deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting career" });
  }
};
