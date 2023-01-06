import e from "express";
import express from "express";
const router = express.Router();

import {
  createWeight,
  getAllWeights,
} from "../controllers/weightController.js";

router.route("/").post(createWeight).get(getAllWeights);

export default router;
