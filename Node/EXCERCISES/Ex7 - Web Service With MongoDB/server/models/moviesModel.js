import { Schema, model } from "mongoose";

const schema = new Schema({
  name: {type: String, required: true},
  director: {type: String, required: true},
  premieredYear: {type: Number, required: true}
}, {versionKey: false});

const Movie = new model('movie', schema);

export default Movie;