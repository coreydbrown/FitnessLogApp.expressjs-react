import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide title"],
    },
    content: {
      type: String,
      required: [true, "Please provide content"],
    },
    category: {
      type: String,
      required: [true, "Please provide category"],
      enum: ["Reminder", "Goal", "Workout Thought", "Other"],
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user ID"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Notes", NoteSchema);
