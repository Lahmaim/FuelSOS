// // 
// import express from "express";
// import { register, login } from "../controllers/authController.js";
// import authRoutes from "./routes/auth.js"
// const router = express.Router();


// router.get("/test", (req, res) => {
//   res.send("Auth route is working");
// });

// app.use("/api/auth", authRoutes)
// router.post("/register", register);
// router.post("/login", login);

// export default router;


// src/routes/auth.js




import express from "express";
import { register, login } from "../controllers/authController.js";

const router = express.Router();

// Optional test route
router.get("/test", (req, res) => {
  res.send("Auth route is working");
});

router.post("/register", register);
router.post("/login", login);

export default router;
