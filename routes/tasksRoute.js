import { Router } from "express";
import { addTask, deleteTask, editTask, getTask } from "../controllers/taskController.js";


const router=Router()

router.post('/addtask',addTask)
router.get('/gettask',getTask)
router.put('/edittask/:id',editTask)
router.delete('/deletetask/:id',deleteTask)

export default router