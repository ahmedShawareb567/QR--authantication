import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnection = () => {
  mongoose.connect(`${process.env.DB_NAME}`).then(() => {
    console.log("DB connected successfully ☂️");
  });
};
