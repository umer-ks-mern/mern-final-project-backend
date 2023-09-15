import { Router } from "express";
import userRouter from "./users.js";
const mainRouter = new Router();


mainRouter.use(userRouter)

export default mainRouter;