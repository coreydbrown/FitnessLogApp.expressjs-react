import { readFile } from "fs/promises";

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Weight from "./models/Weight.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Weight.deleteMany();
    const jsonWeights = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    await Weight.create(jsonWeights);
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
