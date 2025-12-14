import Lead from "../models/Lead.js";

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json({ message: "Lead saved", lead });
  } catch {
    res.status(400).json({ message: "Error saving lead" });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch {
    res.status(500).json({ message: "Error fetching leads" });
  }
};
