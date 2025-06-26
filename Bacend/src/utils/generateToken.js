import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.KEY_JWT, {
    expiresIn: "7d",
  });
};

export default generateToken;
