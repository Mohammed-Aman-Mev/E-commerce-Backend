import mongoose, { Schema } from "mongoose";
import validator from "validator";

interface user extends Document {
  _id: string;
  name: string;
  email: string;
  photo: string;
  role: "user" | "admin";
  gender: "male" | "female";
  dob: Date;
  createdAt: Date;
  updatedAt: Date;
  //virtual atribute

  age: number;
}

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
      validator: validator.default.isEmail,
    },
    photo: {
      type: String,
      require: [true, "please add photo"],
    },
    role: {
      type: String,
      enum: ["user", "admin"],
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

userSchema.virtual("age").get(function () {
  const today = new Date();
  const dob = this.dob;
  let age: number = today.getFullYear() - dob.getFullYear();

  if (
    today.getMonth() < dob.getMonth() ||
    (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
});

export const User = mongoose.model<user>("User", userSchema);
