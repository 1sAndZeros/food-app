import mongoose, { Schema } from "mongoose";

mongoose.connect("mongodb://localhost:27017/food_app");
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
