import {getDashboardStats} from "../controllers/stats.js"

import express from "express";


const router = express.Router();

router.get("/", getDashboardStats);
export default router;