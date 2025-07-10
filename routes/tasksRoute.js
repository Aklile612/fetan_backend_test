import { Router } from "express";
import { addTask } from "../controllers/taskController.js";


const router=Router()

router.post('/addtask',addTask)

export default router