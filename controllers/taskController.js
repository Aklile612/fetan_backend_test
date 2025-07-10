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


// edit task pending-> finished

export const editTask=async (req,res)=>{
  const id= req.params.id
  try {
    
    const editT= await Task.findById(id)
    // console.log(editT)

    if (editT.status==="Pending"){
      editT.status="Completed"
      await editT.save()
      return res.status(200).json({ message: "Task marked as completed",  editT });

    }else{
      editT.status="Pending"
      await editT.save()
      return res.status(200).json({message: "Task marked as Pending",  editT });
    }
  } catch (error) {
    console.log(error.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
  }
}

export const deleteTask= async(req,res)=>{
  const id = req.params.id
  try {
    const deleteT = await Task.findByIdAndDelete(id)
    return res.status(StatusCodes.OK).json({message:" Task successfully deleted"})
  } catch (error) {
    console.log(error.message)
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Please try again, there might be an unknown error on the server",error})
  }
}