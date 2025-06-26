import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  location: {
    latitude: Number,
    longitude: Number,
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Completed"],
    default: "Pending",
  },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Request = mongoose.model("Request", requestSchema);
export default Request;
