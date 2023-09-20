import express from "express";
import connectDB from "./config/db.js";
import mainRouter from "./router/index.js";
import cors from 'cors'

const app = express();
import dotenv from "dotenv";
app.use(cors())
dotenv.config();
connectDB();

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mainRouter);

app.listen(process.env.PORT , () => {
  console.log(
    `E-Commrce ka Backend Server Port:${process.env.PORT} py active ha`
  );
});
