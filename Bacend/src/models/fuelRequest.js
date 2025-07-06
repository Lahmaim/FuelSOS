import mongoose from "mongoose";

const FuelRequestSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  phone: String,
  imatricule: String,
  fuelType: String,
  quantity: Number,
  note: String,
  location: {
    lat: Number,
    lng: Number,
  },
  time: { type: Date, default: Date.now },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Delivered", "Rejected"],
    default: "Pending",
  },
});

export default mongoose.model("FuelRequest", FuelRequestSchema);
