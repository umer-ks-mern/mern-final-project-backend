import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import mainRouter from "./router/index.js";


const app = express();
dotenv.config();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDB()

app.get("/", (req, res) => {
  return res.json({ message: "E-Commerce Backend is Working Fine" });
});


app.use(mainRouter);

app.listen(process.env.PORT , () => {
  console.log(
    `E-Commrce ka Backend Server Port:${process.env.PORT } py active ha`
  );
});
