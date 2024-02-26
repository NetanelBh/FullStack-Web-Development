const express = require('express');
const router = express.Router();

const ProductsService = require('../services/ws2productsService');

router.get('/', async (req, res) => {
  const data = await ProductsService.getAllProducts();
  return res.json(data);
});

module.exports = router;