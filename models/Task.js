import mongoose from "mongoose";

const userTask=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        enum:["Pending","Completed"],
        default:"Pending",
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    }
    },{
        timestamps:true
    
})

const Task = mongoose.model('Task',userTask)

export default Task