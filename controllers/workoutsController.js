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

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const workouts = await result;

  const totalWorkouts = await Workout.countDocuments({
    createdBy: req.user.userId,
  });
  const numOfPages = Math.ceil(totalWorkouts / limit);

  res.status(StatusCodes.OK).json({ workouts, totalWorkouts, numOfPages });
};

export { createWorkout, getAllWorkouts };
