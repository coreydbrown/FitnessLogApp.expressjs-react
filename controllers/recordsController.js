import Workout from "../models/Workout.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const getRecords = async (req, res) => {
  let result = await Workout.find({ createdBy: req.user.userId });

  let records = {};

  result.forEach((workout) => {
    const date = workout.createdAt;
    const exercises = workout.exercises;
    exercises.forEach((exercise) => {
      const name = exercise.exercise;
      const weight = exercise.weight;
      const sets = exercise.sets;
      const reps = exercise.reps;

      let recordInfo = {};
      recordInfo.weight = weight;
      recordInfo.sets = sets;
      recordInfo.reps = reps;
      recordInfo.date = date;

      if (!(name in records)) {
        records[name] = recordInfo;
      } else {
        if (records[name].weight <= weight) {
          records[name] = recordInfo;
        }
      }
    });
  });

  res.status(StatusCodes.OK).json({ records });
};

export { getRecords };
