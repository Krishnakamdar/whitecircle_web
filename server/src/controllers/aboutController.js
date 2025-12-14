import AboutContent from "../models/AboutContent.js";

export const getAbout = async (req, res) => {
  try {
    const about = await AboutContent.findOne().sort({ createdAt: -1 });
    res.json(about);
  } catch {
    res.status(500).json({ message: "Error fetching about content" });
  }
};

export const upsertAbout = async (req, res) => {
  try {
    let about = await AboutContent.findOne();
    if (about) {
      about.set(req.body);
      await about.save();
    } else {
      about = await AboutContent.create(req.body);
    }
    res.json(about);
  } catch {
    res.status(400).json({ message: "Error saving about content" });
  }
};
