import * as ordersRepo from "../repositories/ordersRepo.js";
import {getPersonById} from "./personsServices.js";

export const getAllOrders = () => {
  return ordersRepo.getAllOrders();
};

export const getOrderById = (id) => {
  return ordersRepo.getOrderById(+id);
};

export const getuserByOrder = async (orderId) => {
  const order = await getOrderById(+orderId);
  const user = getPersonById(order.customerId);

  return user;
};

export const addOrder = (order) => {
  return ordersRepo.addOrder(order);
};

export const updateOrder = (id, order) => {
  return ordersRepo.updateOrder(+id, order);
};

export const deleteOrder = (id) => {
  return ordersRepo.deleteOrder(+id);
};