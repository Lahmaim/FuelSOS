// import mongoose from "mongoose";

// const requestSchema = new mongoose.Schema({
//   location: {
//     latitude: Number,
//     longitude: Number,
//   },
//   status: {
//     type: String,
//     enum: ["Pending", "Accepted", "Completed"],
//     default: "Pending",
//   },
//   client: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   provider: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });

// const Request = mongoose.model("Request", requestSchema);
// export default Request;


import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    
    imatricule: {
      type: String,
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Diesel", "Petrol", "Electric"],
      required: true,
    },
    phone:{ type: String,
      required: true},
    quantity: {
      type: Number,
      required: true,
    },
    note: {
      type: String,
    },
    time: {
      type: Date,
      default: Date.now,
    },
    location: {
      lat: {
        type: Number,
        required: true,
      },
      lng: {
        type: Number,
        required: true,
      },
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Completed", "Rejected"],
      default: "Pending",
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", requestSchema);
export default Request;
