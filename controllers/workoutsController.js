import Workout from "../models/Workout.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createWorkout = async (req, res) => {
  const { exercises } = req.body;

  if (!exercises) {
    throw new BadRequestError("Please provide all values");
  }

  req.body.createdBy = req.user.userId;

  const workout = await Workout.create(req.body);

  res.status(StatusCodes.CREATED).json({ workout });
};

const getAllWorkouts = async (req, res) => {
  let result = Workout.find({ createdBy: req.user.userId });
  result = result.sort("-createdAt");

  const workouts = await result;

  res.status(StatusCodes.OK).json({ workouts });
};

export { createWorkout, getAllWorkouts };
