import {Schema, model} from "mongoose";

const orderSchema = new Schema({
  id: {type: Number, required: true},
  name: {type: String, required: true},
  customerId: {type: Number, required: true},
  purchaseDate: {type: String, required: true}
});

const Order = new model("Order", orderSchema);

export default Order;