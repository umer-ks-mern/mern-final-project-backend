import mongoose from "mongoose";
// Connect to DB
const connectDB = async () => {
  mongoose
    .connect(process.env.MONGODB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       
      }
    )
    .then(console.log("Db connected"))
    .catch((e) => {
      console.log(e);
    });
};

export default connectDB;
