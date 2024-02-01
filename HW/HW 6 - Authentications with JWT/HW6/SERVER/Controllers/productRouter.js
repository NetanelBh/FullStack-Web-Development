import express from 'express';

import * as productService from '../Services/productService.js';

// Entry point http://localhost:3001/products

const router = express.Router();

router.get('/', async (req, res) => {
  const product = await productService.getProducts();
  return res.send(product);
});

router.post('/', async (req, res) => {
  const product = req.body;
  const result = await productService.addProduct(product);
  return res.send(result);
});

router.patch('/:id', async (req, res) => {
  const productProp = req.body;
  const {id} = req.params;
  try {
    await productService.updateProduct(id, productProp);
    return res.send("Updated");
  } catch (error) {
    return res.send(error);
  }
});

export default router;