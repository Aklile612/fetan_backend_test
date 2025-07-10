import express from 'express'
import cors from 'cors'
import auth from "./routes/auth.js"
import userRouter from "./routes/userRoute.js"
import { authMiddleware } from "./middlewares/authMiddleware.js";
import tasksRoute from "./routes/tasksRoute.js"
const app=express()


app.use(cors())
app.use(express.json())


app.use("/auth",auth)
app.use("/user",authMiddleware,userRouter)
app.use("/task",authMiddleware,tasksRoute)




export default app