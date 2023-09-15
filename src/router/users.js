import { Router } from "express";
import UserController from "../controller/users.js";
import authController from "../controller/auth.js";

const UserRouter= new Router();

UserRouter.get("/users",UserController.getAll);
UserRouter.post("user/register",UserController.create);
UserRouter.put("user/update/:id",UserController.update);
UserRouter.post("user/login",authController.login);
export default UserRouter;
