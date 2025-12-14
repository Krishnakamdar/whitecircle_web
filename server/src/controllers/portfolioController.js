import PortfolioItem from "../models/PortfolioItem.js";

export const getPortfolio = async (req, res) => {
  try {
    const items = await PortfolioItem.find().sort({ createdAt: -1 });
    res.json(items);
  } catch {
    res.status(500).json({ message: "Error fetching portfolio" });
  }
};

export const createPortfolioItem = async (req, res) => {
  try {
    const item = await PortfolioItem.create(req.body);
    res.status(201).json(item);
  } catch {
    res.status(400).json({ message: "Error creating portfolio item" });
  }
};

export const deletePortfolioItem = async (req, res) => {
  try {
    await PortfolioItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Portfolio item deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting portfolio item" });
  }
};
