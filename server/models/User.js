import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["author", "expert", "admin"],
    default: "author"
  }
});

export default mongoose.model("User", userSchema);
