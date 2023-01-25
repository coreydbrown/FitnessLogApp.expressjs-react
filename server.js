import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

// db and authenticate user
import connectDB from "./db/connect.js";

//routers
import authRoutes from "./routes/authRoutes.js";
import workoutsRoutes from "./routes/workoutsRoutes.js";
import weightRoutes from "./routes/weightRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/authenticate.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Welcome!");
// });

app.use("/auth", authRoutes);
app.use("/workouts", authenticateUser, workoutsRoutes);
app.use("/weight/", authenticateUser, weightRoutes);
app.use("/notes", authenticateUser, notesRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
