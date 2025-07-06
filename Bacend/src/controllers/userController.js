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
import bcrypt from "bcryptjs";

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
  try {
    const allowedFields = ["name", "email", "phone", "image"];
    const updates = {};

    for (let field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Failed to update profile", error: err.message });
  }
};

// 🔒 Admin: Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch users", error: err.message });
  }
};

// 🔒 Admin: Get one user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user", error: err.message });
  }
};

// 🔒 Admin: Delete any user
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};

// ✅ Add new client or provider
export const addClientOrProvider = async (req, res) => {
  try {
    const { name, email, password, phone, image, role } = req.body;

    if (!["client", "provider"].includes(role)) {
      return res.status(400).json({ message: "Role must be 'client' or 'provider'" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      image,
      role,
    });

    await newUser.save();

    res.status(201).json({ message: `${role} created`, user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to create user", error: err.message });
  }
};

// ✅ Update client or provider
export const updateClientOrProvider = async (req, res) => {
  try {
    const { id } = req.params;

    const allowedFields = ["name", "email", "phone", "image"];
    const updates = {};

    for (let field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    const user = await User.findById(id);
    if (!user || (user.role !== "client" && user.role !== "provider")) {
      return res.status(404).json({ message: "Client or provider not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (err) {
    res.status(500).json({ message: "Failed to update user", error: err.message });
  }
};

// ✅ Delete client or provider
export const deleteClientOrProvider = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user || (user.role !== "client" && user.role !== "provider")) {
      return res.status(404).json({ message: "Client or provider not found" });
    }

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: `${user.role} deleted successfully` });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete user", error: err.message });
  }
};

