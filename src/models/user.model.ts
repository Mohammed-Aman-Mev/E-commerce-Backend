import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    _id: {
      type: String,
      require: [true, "please enter ID"],
    },
    name: {
      type: String,
      require: [true, "please enter name"],
    },
    email: {
      type: String,
      unique: [true, "email already exist"],
      require: [true, "please enter email"],
    },
    photo: {
      type: String,
      require: [true, "please add photo"],
    },
    role: {
      type: String,
      enum: ["male", "female"],
      default: "user",
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      require: [true, "please enter gender"],
    },
    dob: {
      type: Date,
      require: [true, "please enter date of birth"],
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", userSchema);
