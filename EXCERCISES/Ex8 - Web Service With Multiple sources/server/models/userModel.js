import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    externalId: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  },
  { versionKey: false }
);

const User = new model("User", schema);

export default User;
