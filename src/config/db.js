import mongoose from "mongoose";

const connectDB = async () => {
  const uri = "mongodb+srv://zainabbhatti808:zainabfirstmay2001@cluster0.i6cukun.mongodb.net/E_commerce";
  mongoose
    .connect(uri, {
      autoCreate: true,
      autoIndex: true,
    })
    .then((res) => {
      console.log("Connected db connection");
    })
    .catch((err) => {
      console.log("Error connecting db connection", err);
    });
};
export default connectDB;