import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

import Workout from "./models/Workout.js";
import Note from "./models/Note.js";
import Weight from "./models/Weight.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    // Workouts
    await Workout.deleteMany();
    const jsonWorkouts = JSON.parse(
      await readFile(new URL("./mock-data/workouts.json", import.meta.url))
    );
    await Workout.create(jsonWorkouts);

    // Notes
    // await Note.deleteMany();
    // const jsonNotes = JSON.parse(
    //   await readFile(new URL("./mock-data/notes.json", import.meta.url))
    // );
    // await Note.create(jsonNotes);

    // Weights
    // await Weight.deleteMany();
    // const jsonWeights = JSON.parse(
    //   await readFile(new URL("./mock-data/weights.json", import.meta.url))
    // );
    // await Weight.create(jsonWeights);

    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
