// // src/app.js
// import express from "express";
// import cors from "cors";

// import authRoutes from "./routes/auth.js";
// import userRoutes from "./routes/users.js";
// import requestRoutes from "./routes/requests.js";

// const app = express();             // ← here!
// app.use(cors());
// app.use(express.json());

// // Quick health-check
// app.get("/", (req, res) => res.send("🩺 FuelSOS API is alive"));

// // Mount routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/requests", requestRoutes);

// // 404 fallback
// app.use((req, res) => {
//   res.status(404).json({ message: `No route for ${req.method} ${req.originalUrl}` });
// });

// export default app;
// src/app.js




// import express from "express";
// import cors from "cors";
// import authRoutes from "./routes/auth.js";

// const app = express();
// app.use(express.json());
// app.use(cors());

// app.use("/api/auth", authRoutes);

// export default app;

