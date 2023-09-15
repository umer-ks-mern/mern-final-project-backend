import { Router } from "express";
import UserController from "../controller/users.js";

const userRouter = new Router();

userRouter.get("/users",UserController.getAll);
userRouter.post("/user/register",UserController.create);
userRouter.put("/user/:id",UserController.update);
userRouter.post("/user/login",UserController.login);
export default userRouter;
