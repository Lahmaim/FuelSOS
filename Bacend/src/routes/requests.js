import express from "express";
import {
  createRequest,
  getAllRequests,
  getMyRequests,
  acceptRequest,
  updateStatus,
} from "../controllers/requestController.js";

// import auth from "../middleware/auth.js";
// import restrictTo from "../middleware/roles.js";

// const router = express.Router();
// router.get("/mine", auth, restrictTo("Client"), getMyRequests);

// router.post("/", auth, restrictTo("Client"), createRequest);
// router.get("/mine", auth, restrictTo("Client"), getMyRequests);
// router.get("/", auth, getAllRequests);
// router.patch("/:id/accept", auth, restrictTo("Provider"), acceptRequest);
// router.patch("/:id/status", auth, restrictTo("Provider"), updateStatus);

// export default router;
// import express from "express";
const router = express.Router();

// TEST endpoint — no middleware
router.get("/ping", (req, res) => {
  res.json({ pong: true });
});

// Your “my” route
router.get("/", getAllRequests);


router.post('/',createRequest)
export default router;
