import { Router } from "express";
import userController from "../controller/users.js";

const userRouter = new Router();

userRouter.get("/users", userController.getAll);

userRouter.get("/user/:id", userController.getSingle);
userRouter.put("/user/:id", userController.update);

userRouter.post("/user/register", userController.create);
userRouter.post("/user/login", userController.login);

export default userRouter;
