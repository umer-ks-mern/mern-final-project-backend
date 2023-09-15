import { Router } from "express";
import billController from "../controller/bills.js";

const billRouter = new Router();

billRouter.post("/checkout", billController.generateBill);

export default billRouter;
