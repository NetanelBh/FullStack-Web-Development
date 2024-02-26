import * as productRepo from '../Repositories/productRepo.js';

// GET
export const getProducts = () => {
  return productRepo.getProducts();
};

// POST
export const addProduct = (newProduct) => {
  return productRepo.addProduct(newProduct);
};

// PATCH
export const updateProduct = (id, product) => {
  return productRepo.updateProduct(id, product);
};