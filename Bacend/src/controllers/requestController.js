import Request from "../models/Request.js";

// 📌 Client: Create new request
export const createRequest = async (req, res) => {
  try {
    const request = await Request.create({
      ...req.body,
      // client: req.user._id,
    });
    res.status(201).json(request);
  } catch {
    res.status(500).json({ message: "Failed to create request" });
  }
};

// 📋 Admin/Provider: Get all requests
export const getAllRequests = async (req, res) => {
  try {
    // const filter = req.user.role === "Provider"
    //   ? { $or: [{ provider: req.user._id }, { status: "Pending" }] }
    //   : {};

    // const requests = await Request.find(filter).populate("client provider", "name email role");
        const requests = await Request.find().populate("client provider", "name email role");

    res.status(200).json(requests);
  } catch {
    res.status(500).json({ message: "Failed to fetch requests" });
  }
};

// 📋 Client: View my requests
export const getMyRequests = async (req, res) => {
  const requests = await Request.find({ client: req.user._id });
  res.status(200).json(requests);
};

// ✅ Provider: Accept a request
export const acceptRequest = async (req, res) => {
  const request = await Request.findById(req.params.id);
  if (!request || request.status !== "Pending")
    return res.status(400).json({ message: "Request unavailable" });

  request.status = "Accepted";
  request.provider = req.user._id;
  await request.save();

  res.status(200).json(request);
};

// 🔄 Provider: Update request status
export const updateStatus = async (req, res) => {
  const request = await Request.findById(req.params.id);

  if (!request || String(request.provider) !== String(req.user._id))
    return res.status(403).json({ message: "Forbidden" });

  request.status = req.body.status;
  await request.save();

  res.status(200).json(request);
};
