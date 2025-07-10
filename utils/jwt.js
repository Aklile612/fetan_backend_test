import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const generateToken=(user)=>{
    const token = jwt.sign({_id:user._id,  name: user.name,
        email: user.email},process.env.SECREAT_KEY);

    return token;
}