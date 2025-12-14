import express from "express";
import { login, seedAdmin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.post("/seed-admin", seedAdmin); // remove or protect after first use

export default router;
