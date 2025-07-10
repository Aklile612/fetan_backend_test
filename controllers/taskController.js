import {StatusCodes} from "http-status-codes"
import Task from "../models/Task.js"

//add task

export const  addTask=async (req,res)=>{
    const {name}=req.body
    if (!name){
        return res.status(StatusCodes.CONFLICT).json({message:"Please enter all the required filed"})
    }
    try {
      const task = await Task.create({
        name,
        user:req.user._id
      })  
      return res.status(StatusCodes.CREATED).json({ message: "Task created", task });
    } catch (error) {
        console.log(error)
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
        
    }
}