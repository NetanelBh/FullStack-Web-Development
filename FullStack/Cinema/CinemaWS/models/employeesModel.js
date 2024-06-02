import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    username: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  { versionKey: false }
);

const UsersModel = new model("employee", schema);

export default UsersModel;
