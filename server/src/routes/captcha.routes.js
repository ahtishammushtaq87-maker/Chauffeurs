import { Router } from "express";
import { createChallenge } from "../utils/captcha.js";

const router = Router();

// Public: issues a fresh math challenge for the "I'm not a robot" widget.
router.get("/challenge", (_req, res) => {
  res.json(createChallenge());
});

export default router;
