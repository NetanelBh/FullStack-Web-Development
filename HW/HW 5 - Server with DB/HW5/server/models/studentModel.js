import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    Name: { type: String, required: true },
    City: { type: String, required: true },
    Faculty: { type: String, required: true },
  },
  { versionKey: false }
);

const Student = new model("Student", schema);

export default Student;
