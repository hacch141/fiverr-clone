import express from "express"
import {
    getOrders,
    intent
} from "../controllers/order.controller.js"
import {payment} from "../controllers/stripe.js"
import {verifyToken} from "../middleware/jwt.js"

const router = express.Router();

router.get("/", verifyToken, getOrders);
router.post("/create-payment-intent/:id", verifyToken, intent);
router.post("/create-checkout-session/:id", verifyToken, payment);

export default router;