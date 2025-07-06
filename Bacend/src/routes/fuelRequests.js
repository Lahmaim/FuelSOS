import express from "express";
import FuelRequest from "../../src/models/fuelRequest.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// POST /api/requests
router.post("/", auth, async (req, res) => {
  try {
    const newRequest = new FuelRequest({
      ...req.body,
      clientId: req.user._id,
    });
    await newRequest.save();
    res.status(201).json({ message: "Request saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
