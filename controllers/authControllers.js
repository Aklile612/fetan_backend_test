import bcrypt,{compare} from "bcryptjs";
import {StatusCodes} from "http-status-codes"

import User from "../models/User.js"
import { generateToken } from "../utils/jwt.js";

// redister user/sign In

export const registerNewUser= async (req,res)=>{
    const {name,email,password}= req.body
    if (!name || !email || !password){
        return res.status(StatusCodes.CONFLICT).json({message:"Please enter all the required filed"})
    }
    const existingUser=await User.findOne({email})
    if (existingUser){
        return res.status(StatusCodes.CONFLICT).json({message:"User already exist"})
    }
    if (password.length<8){
        return res.status(StatusCodes.CONFLICT).json({message:"Password must be eight or greater"})
    }
    try {
        const hashedpassword= await  bcrypt.hash(password,10);
        const newUser=new User({
            name:name,
            email:email,
            password:hashedpassword
        }) 
        const user=await newUser.save();  
        const token =generateToken(user)
        return res.status(StatusCodes.ACCEPTED).json({message:"user successfully created",user,token})    
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
    }
}

export const loginUser=async (req,res)=>{
    const {email,password}= req.body
    if (!email || !password){
        return res.status(StatusCodes.CONFLICT).json({message:"Please enter all the required filed"})
    }
    try {
        const existingUser= await User.findOne({email})

        if (!existingUser){
            return res.status(StatusCodes.CONFLICT).json({message:"user Doesn't exists"})
        }
        const comparePassword= await bcrypt.compare(password,existingUser.password)
        if (!comparePassword){
            return res.status(StatusCodes.UNAUTHORIZED).json({message:"please enter the correct password"})
        }
        const token = generateToken(existingUser)
        return res.status(StatusCodes.OK).json({
            message: "Loged in successfully",
            token,
            user: {
              id: existingUser._id,
              name: existingUser.name,
              email: existingUser.email
            }
          });
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
    }
    
}
