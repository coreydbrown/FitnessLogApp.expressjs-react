import Workout from "../models/Workout.js";
import { StatusCodes } from "http-status-codes";

const getRecords = async (req, res) => {
  const result = await Workout.find({ createdBy: req.user.userId });

  let records = {};

  result.forEach((workout) => {
    const date = workout.createdAt;

    const exercises = workout.exercises;
    exercises.forEach((exercise) => {
      const exerciseObj = { ...exercise.toObject(), date };
      const name = exercise.exercise;
      const weight = exercise.weight;

      if (!(name in records)) {
        records[name] = exerciseObj;
      } else {
        if (records[name].weight <= weight) {
          records[name] = exerciseObj;
        }
      }
    });
  });

  records = Object.values(records);

  records = records.sort((a, b) => b.date - a.date);

  res.status(StatusCodes.OK).json({ records });
};

export { getRecords };
