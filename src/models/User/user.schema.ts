import mongoose, { Schema, model } from "mongoose";

const schema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  phone: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  username: {
    type: Schema.Types.String,
    required: true,
  },
  passwords: {
    type: Schema.Types.String,
  },
});

export default model("User", schema);
