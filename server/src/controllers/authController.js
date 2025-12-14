import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminUser from "../models/AdminUser.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminUser.findOne({ email });
    if (!admin) return res.status(401).json({ message: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, admin.passwordHash);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Login error" });
  }
};

export const seedAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await AdminUser.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Admin already exists" });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const admin = await AdminUser.create({ email, passwordHash });
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ message: "Error creating admin" });
  }
};
