import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";


export const register = async (req, res) => {
  try {
    const { name, email, password, phone,role } = req.body;

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User exists" });

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, phone, role });
res.status(201).json(user)
    // res.status(201).json({ token: generateToken(user._id) });
  } catch {
    res.status(500).json({ message: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ message: "Invalid email or password" });

    // Remove sensitive info before sending
    const { password: _, ...userData } = user.toObject();

    res.json({ token: generateToken(user._id, user.role), user: userData });
  } catch {
    res.status(500).json({ message: "Login failed" });
  }
};

