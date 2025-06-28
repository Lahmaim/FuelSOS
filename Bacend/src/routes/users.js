// import express from "express";
// import {
//   getUserProfile,
//   updateUserProfile,
//   getAllUsers,
//   getUserById,
//   deleteUser,
// } from "../controllers/userController.js";

// import auth from "../middleware/auth.js";
// import restrictTo from "../middleware/roles.js";

// const router = express.Router();

// router.get("/me", auth, getUserProfile);
// router.put("/me", auth, updateUserProfile);

// // Admin-only routes
// //router.get("/", auth, restrictTo("Admin"), getAllUsers);
// router.get("/",  getAllUsers);
// router.get("/:id", auth, restrictTo("Admin"), getUserById);
// router.delete("/:id", auth, restrictTo("Admin"), deleteUser);

// export default router;


import express from "express";
import {
  getAllClients,
  getAllProviders,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  getUserById,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// Public/admin routes
router.get("/clients", getAllClients);
router.get("/providers", getAllProviders);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

// Protected user routes (you should protect these with middleware)
router.get("/me/profile", getUserProfile);
router.put("/me/profile", updateUserProfile);

export default router;
