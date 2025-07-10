import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

 
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECREAT_KEY); 
    req.user = decoded; 
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Invalid or expired token" });
  }
};
