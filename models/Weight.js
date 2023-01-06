import mongoose from "mongoose";

const WeightSchema = new mongoose.Schema(
  {
    weight: {
      type: Number,
      required: [true, "Please provide your weight"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user ID"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Weight", WeightSchema);
