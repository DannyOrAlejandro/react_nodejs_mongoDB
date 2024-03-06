import { timeStamp } from "console";
import mongoose from "mongoose";
const userShema = new mongoose.Schema(
  {
    // creel el esquema de lo que se va a guardar en la base de datos, esquema de usuarios
    userName: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      trim: true,
    }
  },
  { timestamps: true }
);
export default mongoose.model("user", userShema); //para poder interactuar con la base de datos
