import express from "express";
const router = express.Router();

import rateLimiter from "express-rate-limit";
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message:
    "Too many requests were received from this IP address, please try again after 15 minutes",
});

import { register, login } from "../controllers/authController.js";

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);

export default router;
