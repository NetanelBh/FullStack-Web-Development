const express = require("express");
const router = express.Router();

const productsService = require("../services/WS1productsService");

router.get("/", async (req, res) => {
  const products = await productsService.getProducts();
  console.log(products);
  return res.json(products);
});

module.exports = router;
