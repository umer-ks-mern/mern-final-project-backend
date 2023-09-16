import express from "express";
import connectDB from "./config/db.js";

const app = express();

import dotenv from "dotenv";
dotenv.config();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ message: "E-Commerce Backend is Working Fine" });
});
