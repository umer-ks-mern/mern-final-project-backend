import { Router } from "express";
import UserController from "../controller/users.js";

const UserRouter= new Router();

UserRouter.get("/users",UserController.getAll);
UserRouter.post("user_register",UserController.create);
UserRouter.put("user/update/:id",UserController.update);

export default UserRouter;
