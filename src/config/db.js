import mongoose from "mongoose";

// Connect to DB
const connectDB = async () => {
  mongoose
    .connect("mongodb+srv://tk55971:KS_Ecommerce@cluster0.zsmjshd.mongodb.net/Ecommerce",
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
