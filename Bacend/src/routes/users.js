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


// import express from "express";
// import {
//   getAllClients,
//   getAllProviders,
//   getAllUsers,
//   getUserProfile,
//   updateUserProfile,
//   getUserById,
//   deleteUser,
// } from "../controllers/userController.js";

// const router = express.Router();

// // Public/admin routes
// router.get("/clients", getAllClients);
// router.get("/providers", getAllProviders);
// router.get("/", getAllUsers);
// router.get("/:id", getUserById);
// router.delete("/:id", deleteUser);

// // Protected user routes (you should protect these with middleware)
// router.get("/me/profile", getUserProfile);
// router.put("/me/profile", updateUserProfile);

// export default router;



// routes/userRoutes.js



// import express from "express";
// import {
//   getAllClients,
//   getAllProviders,
//   getAllUsers,
//   getUserProfile,
//   updateUserProfile,
//   getUserById,
//   deleteUser,
// } from "../controllers/userController.js";

// import protect from "../middleware/auth.js";
// import  restrictTo  from "../middleware/restrictTo.js";

// const router = express.Router();

// // 🧑‍💻 Protected User Routes
// router.get("/me/profile", protect, getUserProfile);
// router.put("/me/profile", protect, updateUserProfile);



// // 🔐 Admin-only routes
// router.get("/clients", protect, restrictTo("admin"), getAllClients);
// router.get("/providers", protect, restrictTo("admin"), getAllProviders);
// router.get("/", protect, restrictTo("admin"), getAllUsers);
// router.get("/:id", protect,  getUserById);
// router.delete("/:id", protect, restrictTo("admin"), deleteUser);

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
  addClientOrProvider,
  // updateClientOrProvider,
  // deleteClientOrProvider,
} from "../controllers/userController.js";

import protect from "../middleware/auth.js";
import restrictTo from "../middleware/restrictTo.js";

  const router = express.Router();

// 👤 Client/Provider: Manage own profile
router.get("/me/profile", protect, getUserProfile);
router.put("/me/profile", protect, updateUserProfile);

// 🔐 Admin-only: View all users
router.get("/clients", protect, restrictTo("admin"), getAllClients);
router.get("/providers", protect, restrictTo("admin"), getAllProviders);
router.get("/", protect, restrictTo("admin"), getAllUsers);

// ✅ Admin: Manage specific user profile
router.get("/:id/profile", protect, getUserById);
router.put("/:id/profile", protect, updateUserProfile);
router.delete("/:id/profile", protect, restrictTo("admin"), deleteUser);

// ✅ Admin: Add new client/provider
router.post("/", protect, restrictTo("admin"), addClientOrProvider);


export default router