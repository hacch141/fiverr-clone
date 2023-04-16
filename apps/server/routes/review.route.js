import express from "express"
import {
    createReview,
    deleteReview,
    getReview
} from "../controllers/review.controller.js"
import {verifyToken} from "../middleware/jwt.js"

const router = express.Router();

router.post("/",verifyToken, createReview);
router.delete("/:id", verifyToken, deleteReview);
router.get("/:gigId", getReview);

export default router;