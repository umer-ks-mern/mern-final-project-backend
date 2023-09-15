import { Router } from "express";
import userRouter from "./users.js";
import productRouter from "./products.js";
import billRouter from "./bills.js";

const mainRouter = new Router();

mainRouter.use(userRouter);
mainRouter.use(billRouter);
mainRouter.use(productRouter);

export default mainRouter;
