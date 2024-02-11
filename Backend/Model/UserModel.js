import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      password: {
        type: String,
        required: true,
      },
      isAdmin: {
        type: Boolean,
        require: true,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.Model("User", userSchema);
export default User;
