import Order from "../models/orderModel.js";

export const getAllOrders = () => {
  return Order.find();
};

export const getOrderById = (id) => {
  return Order.findOne({id});
};

export const addOrder = (order) => {
  const newOrder = new Order(order);
  return newOrder.save();
};

export const updateOrder = (id, order) => {
  return Order.replaceOne({id}, order);
};

export const deleteOrder = (id) => {
  return Order.deleteOne({id});
};