import Testimonial from "../models/Testimonial.js";

export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.json(testimonials);
  } catch {
    res.status(500).json({ message: "Error fetching testimonials" });
  }
};

export const createTestimonial = async (req, res) => {
  try {
    const testimonial = await Testimonial.create(req.body);
    res.status(201).json(testimonial);
  } catch {
    res.status(400).json({ message: "Error creating testimonial" });
  }
};

export const deleteTestimonial = async (req, res) => {
  try {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.json({ message: "Testimonial deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting testimonial" });
  }
};
