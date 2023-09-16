import express from "express";
import connectDB from "./config/db.js";
import mainRouter from "./router/index.js";

const app = express();
import dotenv from "dotenv";
dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mainRouter);

app.listen(process.env.PORT, () => {
  console.log(
    `E-Commrce ka Backend Server Port:${process.env.PORT} py active ha`
  );
});
