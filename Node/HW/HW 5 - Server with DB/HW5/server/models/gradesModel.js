import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    StudentId: { type: String, required: true },
    Profession: { type: String, required: true },
    Score: { type: String, required: true },
  },
  { versionKey: false }
);

const Grade = new model("Grade", schema);

export default Grade;
