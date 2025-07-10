import { Router } from "express";
import { addTask, deleteTask, editTask } from "../controllers/taskController.js";


const router=Router()

router.post('/addtask',addTask)
router.put('/edittask/:id',editTask)
router.delete('/deletetask/:id',deleteTask)

export default router