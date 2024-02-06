import { Schema, model } from "mongoose";

const schema = new Schema(
  {
    prodId: { type: Number, required: true},
    name: { type: String, required: true },
    color: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { versionKey: false }
);

const Product = new model("Product", schema);

export default Product;
