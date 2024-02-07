import { Schema, model } from "mongoose";

const schema = new Schema({
  date: {type: String, required: true},
  startingHour: {type: Number, required: true},
  endingHour: {type: Number, required: true}
});

const Shift = new model('Shift', schema);

export default Shift;