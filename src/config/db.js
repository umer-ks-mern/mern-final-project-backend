import mongoose from "mongoose";

const connectDB = async () => {
  const uri = process.env.MONGOOSE_DB_CONNECTION_STRING_LOCAL;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
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