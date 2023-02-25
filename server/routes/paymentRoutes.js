import express from "express";
import { buySubscription } from "../controllers/paymentController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Buy subscription
router.route("/subscribe").post(isAuthenticated, buySubscription)

export default router;