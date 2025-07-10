import { Router } from "express";
import { registerNewUser } from "../controllers/authControllers.js";

const router= Router()

router.post('/register',registerNewUser)


export default router