import mongoose from "mongoose";
// import config from "config";
import dotenv from "dotenv";
dotenv.config();
let db = process.env.MONGO_URI;
// if (process.env.NODE_ENV === "production") {
//   db = config.get("mongoUriProd");
// }
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("mongodb connected");
  } catch (err) {
    console.log(err.message);
    //Exit process with failure
    process.exit(1);
  }
};
export default connectDB;
