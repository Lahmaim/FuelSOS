import express from "express";
import {
  getUserProfile,
  updateUserProfile,
  getAllUsers,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";

import auth from "../middleware/auth.js";
import restrictTo from "../middleware/roles.js";

const router = express.Router();

router.get("/me", auth, getUserProfile);
router.put("/me", auth, updateUserProfile);

// Admin-only routes
router.get("/", auth, restrictTo("Admin"), getAllUsers);
router.get("/:id", auth, restrictTo("Admin"), getUserById);
router.delete("/:id", auth, restrictTo("Admin"), deleteUser);

export default router;
