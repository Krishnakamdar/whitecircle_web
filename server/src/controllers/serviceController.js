import Service from "../models/Service.js";

export const getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch {
    res.status(500).json({ message: "Error fetching services" });
  }
};

export const getServiceBySlug = async (req, res) => {
  try {
    const service = await Service.findOne({ slug: req.params.slug });
    if (!service) return res.status(404).json({ message: "Service not found" });
    res.json(service);
  } catch {
    res.status(500).json({ message: "Error fetching service" });
  }
};

export const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(201).json(service);
  } catch {
    res.status(400).json({ message: "Error creating service" });
  }
};

export const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(service);
  } catch {
    res.status(400).json({ message: "Error updating service" });
  }
};

export const deleteService = async (req, res) => {
  try {
    await Service.findByIdAndDelete(req.params.id);
    res.json({ message: "Service deleted" });
  } catch {
    res.status(400).json({ message: "Error deleting service" });
  }
};
