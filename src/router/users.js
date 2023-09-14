import { Router } from "express";
import registerController from "../controller/register.js";
import loginController from "../controller/login.js";
const userRouter = new Router();
userRouter.post("/register", registerController.register);
userRouter.post("/login",loginController.login)
export default userRouter