import express from "express";
const router = express.Router();

import {
  createWorkout,
  getAllWorkouts,
  updateWorkout,
  deleteWorkout,
} from "../controllers/workoutsController.js";

router.route("/").post(createWorkout).get(getAllWorkouts);
router.route("/:id").patch(updateWorkout).delete(deleteWorkout);

export default router;
