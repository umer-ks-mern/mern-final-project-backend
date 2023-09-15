import { Router } from "express";
import UserController from "../controller/users.js";
import authController from "../controller/auth.js";

const userRouter = new Router();

userRouter.get("/users", UserController.getAll);
userRouter.post("user/register", UserController.create);
userRouter.put("user/:id", UserController.update);
userRouter.post("user/login", authController.login);
export default userRouter;
