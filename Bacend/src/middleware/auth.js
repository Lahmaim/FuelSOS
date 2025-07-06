// import jwt from "jsonwebtoken";
// import User from "../models/User.js";
// import dotenv from "dotenv"

// dotenv.config()
// const auth = async (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   console.log("Token:", token);
//   if (!token) return res.status(401).json({ message: "No token provided" });

//   try {
//     const decoded = jwt.verify(token, process.env.KEY_JWT);
//     console.log("Decoded token:", decoded);
//     req.user = await User.findById(decoded.id).select("-password");

//     next();
//   } catch {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// export default auth;



import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";

dotenv.config();

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.log("No Authorization header");
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    console.log("No token found after Bearer");
    return res.status(401).json({ message: "No token provided" });
  }

  console.log("Token received:", token);
  console.log("JWT Secret:", process.env.KEY_JWT);

  try {
    const decoded = jwt.verify(token, process.env.KEY_JWT);
    console.log("Decoded token:", decoded);

    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      console.log("User not found for id:", decoded.id);
      return res.status(401).json({ message: "Invalid token" });
    }

    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export default auth;
