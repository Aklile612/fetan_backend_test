import express from 'express'
import cors from 'cors'
import auth from "./routes/auth.js"
import userRouter from "./routes/userRoute.js"
import { authMiddleware } from "./middlewares/authMiddleware.js";

const app=express()


app.use(cors())
app.use(express.json())


app.use("/auth",auth)
app.use("/user",authMiddleware,userRouter)



export default app