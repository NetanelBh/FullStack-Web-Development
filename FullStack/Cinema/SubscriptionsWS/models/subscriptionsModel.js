import { Schema, model } from "mongoose";

const schema = new Schema(
  { versionKey: false },
  {
    userId: { type: String },
    // This field store all movies that the member watched and their date
    // Each array element: {movieId: movie id, date: watched data}
    movies: { type: Array },
  }
);

const SubscriptionModel = new model("subscription", schema);

export default SubscriptionModel;
