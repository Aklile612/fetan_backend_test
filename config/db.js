import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const db_URI = process.env.DB_URI

const dbConnect= async()=>{
    try {
        await mongoose.connect(db_URI)
        console.log("Connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default dbConnect