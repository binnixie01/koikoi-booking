import mongoose, { Schema } from "mongoose";

const UserSchema= new mongoose.Schema({
  name: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
  provider: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
