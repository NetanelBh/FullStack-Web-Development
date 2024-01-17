import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  name: {type: String, required: true},
  age: {type: Number, required: true},
  city: {type: String, required: true}
});

const Person = new mongoose.model('Person', personSchema, "Persons");

export default Person;