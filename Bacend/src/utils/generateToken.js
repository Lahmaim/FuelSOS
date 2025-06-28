import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()


const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.KEY_JWT, {
    expiresIn: "7d",
  });
};

export default generateToken;
