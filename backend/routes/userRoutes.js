import { getUsersForSidebar } from "../Controllers/userController.js";
import express from 'express';
import protectRoute from "../middleware/protectRoute.js"

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar)

export default router;