import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phone: String,
  image: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
  role: {
    type: String,
    enum: ["client", "provider", "admin"],
    default: "client",
  },
});

const User = mongoose.model("User", userSchema);
export default User;

