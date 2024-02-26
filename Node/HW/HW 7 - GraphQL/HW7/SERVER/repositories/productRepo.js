import productModel from '../models/productModel.js';

export const getAllProducts = () => {
  return productModel.find();
};

export const getProductById = (id) => {
  return productModel.findOne({prodId: id});
};

export const addProduct = async (product) => {
  const newProduct = new productModel(product);
  
  return await newProduct.save();
};

export const updateProduct = (id, updatedProduct) => {
  return productModel.findOneAndUpdate({prodId: id}, updatedProduct);
};

export const deleteProduct = (id) => {
  return productModel.deleteOne({prodId: id});
};

export const getProductsExpensiveFrom = (price) => {
  return productModel.find({price: {$gt: price}});
};

export const updatePrice = (id, updatedPrice) => {
  return productModel.findOneAndUpdate({prodId: id}, {price: updatedPrice});
};

export const deleteProductsByColor = (color) => {
  return productModel.deleteMany({color: color});
};