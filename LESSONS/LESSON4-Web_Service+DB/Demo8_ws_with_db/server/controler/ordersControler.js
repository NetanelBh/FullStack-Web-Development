import express from 'express';

import * as ordersService from "../services/ordersServices.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await ordersService.getAllOrders();
    res.send(orders);
  } catch (error) {
    res.send(error);
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const order = await ordersService.getOrderById(id);
    res.send(order);
  } catch (error) {
    res.send(error);
  }
});

router.get('/:id/user', async (req, res) => {
  const id = req.params.id;
  try {
    const user = await ordersService.getuserByOrder(id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

router.post('/', async (req, res) => {
  const newOrder = req.body;
  try {
    const resp = await ordersService.addOrder(newOrder);
    res.send(resp);
  } catch (error) {
    res.send(error);
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updatedOrder = req.body;
  try {
    const resp = await ordersService.updateOrder(id, updatedOrder);
    if (resp.modifiedCount > 0) {
      res.send("Successfully order replaced");
    } else {
      res.send("Failed order replaced");
    }
  } catch (error) {
    res.send(error);
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const resp = await ordersService.deleteOrder(id);
    if (resp.deletedCount > 0) {
      res.send("Order seccessfully deleted");
    } else {
      res.send("Order not found");
    }
  } catch (error) {
    res.send(error);
  }
});

export default router;