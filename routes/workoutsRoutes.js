import express from "express";
const router = express.Router();

import {
  createWorkout,
  getAllWorkouts,
} from "../controllers/workoutsController.js";

router.route("/").post(createWorkout).get(getAllWorkouts);

export default router;
