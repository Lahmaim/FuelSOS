// import User from "../models/User.js";


// export const getAllClients = async (req, res) => {
//   try {
//     const clients = await User.find({ role: "client" });
//     res.json(clients);
//   } catch (err) {
//     res.status(500).json({ msg: err.message });
//   }
// };
// // 👤 Get logged-in user profile
// export const getUserProfile = async (req, res) => {
//   res.status(200).json(req.user);
// };

// // 📝 Update logged-in user profile
// export const updateUserProfile = async (req, res) => {
//   const updates = req.body;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
//       new: true,
//     }).select("-password");

//     res.status(200).json(updatedUser);
//   } catch {
//     res.status(500).json({ message: "Failed to update profile" });
//   }
// };

// // 🔒 Admin: Get all users
// export const getAllUsers = async (req, res) => {
//   const users = await User.find().select("-password");
//   res.status(200).json(users);
// };

// // 🔒 Admin: Get one user by ID
// export const getUserById = async (req, res) => {
//   const user = await User.findById(req.params.id).select("-password");
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.status(200).json(user);
// };

// // 🔒 Admin: Delete a user
// export const deleteUser = async (req, res) => {
//   const user = await User.findByIdAndDelete(req.params.id);
//   if (!user) return res.status(404).json({ message: "User not found" });
//   res.status(200).json({ message: "User deleted" });
// };


import User from "../models/User.js";

// ✅ Get all clients
export const getAllClients = async (req, res) => {
  try {
    const clients = await User.find({ role: "client" }).select("-password");
    res.json(clients);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ✅ Get all providers
export const getAllProviders = async (req, res) => {
  try {
    const providers = await User.find({ role: "provider" }).select("-password");
    res.json(providers);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// 👤 Get logged-in user profile
export const getUserProfile = async (req, res) => {
  res.status(200).json(req.user);
};

// 📝 Update logged-in user profile
export const updateUserProfile = async (req, res) => {
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
    }).select("-password");

    res.status(200).json(updatedUser);
  } catch {
    res.status(500).json({ message: "Failed to update profile" });
  }
};

// 🔒 Admin: Get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.status(200).json(users);
};

// 🔒 Admin: Get one user by ID
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json(user);
};

// 🔒 Admin: Delete a user
export const deleteUser = async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.status(200).json({ message: "User deleted" });
};
