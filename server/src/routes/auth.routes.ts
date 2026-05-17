import express from "express";

import {
  registerUser,
  loginUser,
} from "../controllers/auth.controller";

import {
  protect,
  authorizeRoles,
} from "../middleware/auth.middleware";

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
  "/me",
  protect,
  (req, res) => {
    res.json({
      message: "Protected Route Accessed",
    });
  }
);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      message: "Welcome Admin",
    });
  }
);

export default router;