import { Router } from "express";
import productController from "../controller/products.js";

const productRouter = new Router();

productRouter.get("/product/:id", productController.getSingle);
productRouter.get("/products", productController.getAll);

productRouter.put("/product/:id", productController.update);

productRouter.delete("/product/:id", productController.delete);

productRouter.post("/product/create", productController.create);
export default productRouter;
