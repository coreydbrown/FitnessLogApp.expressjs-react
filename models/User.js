import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please provide first name"],
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Please provide last name"],
    minLength: 1,
    maxLength: 30,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email address",
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minLength: 8,
    maxLength: 30,
  },
});

export default mongoose.model("User", UserSchema);
