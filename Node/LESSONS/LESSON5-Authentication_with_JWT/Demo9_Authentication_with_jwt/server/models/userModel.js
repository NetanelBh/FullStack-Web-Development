import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false }
);

const User = new model('User', schema);

export default User;