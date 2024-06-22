import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
DB_NAME
mongoose

const connectDB = async () =>{
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME} `)
    console.log(`\n Mongo DB connected !! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection Failed " , env) ;
    process.exit(1);
  }
}

export default connectDB;