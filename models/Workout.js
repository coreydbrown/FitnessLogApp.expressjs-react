import mongoose from "mongoose";

const WorkoutSchema = new mongoose.Schema(
  {
    exercises: [
      {
        exercise: String,
        weight: Number,
        sets: Number,
        reps: Number,
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user ID"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Workouts", WorkoutSchema);
