import express from "express";
import connectDB from "./Config/db.js";
import UserRouter from "./router/users.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(connectDB)



app.use(UserRouter);

app.listen(3301, () => {
    console.log('E-Commrce ka Backend Server Port: 3301 py active ha');
})
