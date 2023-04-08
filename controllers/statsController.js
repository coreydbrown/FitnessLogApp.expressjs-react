import Workout from "../models/Workout.js";
import Weight from "../models/Weight.js";

import { StatusCodes } from "http-status-codes";

const getStats = async (req, res) => {
  // Workouts within last week
  const workoutsLastWeek = await Workout.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
    },
  });
  // Number of workouts within last week
  const numWorkoutsLastWeek = workoutsLastWeek.length;
  // Percentage of days worked out in last week
  const workoutPercentageLastWeek = Math.round((numWorkoutsLastWeek / 7) * 100);

  // Workouts within last month
  const workoutsLastMonth = await Workout.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 30 * 60 * 60 * 24 * 1000),
    },
  });
  // Number of workouts within last month
  const numWorkoutsLastMonth = workoutsLastMonth.length;
  // Percentage of days worked out in last month
  const workoutPercentageLastMonth = Math.round(
    (numWorkoutsLastMonth / 30) * 100
  );

  // // Weight change last week
  const weightsLastWeek = await Weight.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 7 * 60 * 60 * 24 * 1000),
    },
  }).sort("-createdAt");
  let weightChangeLastWeek = 0;
  if (weightsLastWeek.length > 0) {
    const unroundedWeightChangeLastWeek =
      weightsLastWeek[0].weight -
      weightsLastWeek[weightsLastWeek.length - 1].weight;
    weightChangeLastWeek = Math.round(unroundedWeightChangeLastWeek * 10) / 10;
  }

  // Weight change last month
  const weightsLastMonth = await Weight.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 30 * 60 * 60 * 24 * 1000),
    },
  }).sort("-createdAt");
  let weightChangeLastMonth = 0;
  if (weightsLastMonth.length > 0) {
    const unroundedWeightChangeLastMonth =
      weightsLastMonth[0].weight -
      weightsLastMonth[weightsLastMonth.length - 1].weight;
    weightChangeLastMonth =
      Math.round(unroundedWeightChangeLastMonth * 10) / 10;
  }

  // Weight change last 3 months
  const weightsLast3Months = await Weight.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 90 * 60 * 60 * 24 * 1000),
    },
  }).sort("-createdAt");
  let weightChangeLast3Months = 0;
  if (weightsLast3Months.length > 0) {
    const unroundedWeightChangeLast3Months =
      weightsLast3Months[0].weight -
      weightsLast3Months[weightsLast3Months.length - 1].weight;
    weightChangeLast3Months =
      Math.round(unroundedWeightChangeLast3Months * 10) / 10;
  }

  // Weight change last year
  const weightsLastYear = await Weight.find({
    createdBy: req.user.userId,
    createdAt: {
      $gte: new Date(new Date() - 365 * 60 * 60 * 24 * 1000),
    },
  }).sort("-createdAt");
  let weightChangeLastYear = 0;
  if (weightsLastYear.length > 0) {
    const unroundedWeightChangeLastYear =
      weightsLastYear[0].weight -
      weightsLastYear[weightsLastYear.length - 1].weight;
    weightChangeLastYear = Math.round(unroundedWeightChangeLastYear * 10) / 10;
  }

  // Most recent record
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
  const mostRecentRecord = records[0];

  res.status(StatusCodes.OK).json({
    numWorkoutsLastWeek,
    numWorkoutsLastMonth,
    workoutPercentageLastWeek,
    workoutPercentageLastMonth,
    weightChangeLastWeek,
    weightChangeLastMonth,
    weightChangeLast3Months,
    weightChangeLastYear,
    mostRecentRecord,
  });
};

export { getStats };
