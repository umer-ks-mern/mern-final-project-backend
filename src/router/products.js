import { Router } from "express";
import productController from "../controller/products.js";
import loginAuth from "../Middlewares/Authentication.js";
import roleAuth from "../middlewares/authorization.js";
import  upload from '../middlewares/multer.js'


const productRouter = new Router();

productRouter.get("/product/:id", productController.getSingle);
productRouter.get("/products", productController.getAll);

productRouter.put("/product/:id",loginAuth,roleAuth, productController.update);

productRouter.delete("/product/:id",loginAuth,roleAuth, productController.delete);

productRouter.post("/product/create",loginAuth,roleAuth,productController.create);
productRouter.post("/upload",upload.single('file'),productController.upload)
export default productRouter;
