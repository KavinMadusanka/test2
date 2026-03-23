import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    console.log("process.env.MONGO_URI: ", process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI );
    console.log(`MongoDB Connected: ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`.bgRed.white);
    process.exit(1);
  }
};

export default connectDB;