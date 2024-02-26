import ProductModel from '../Models/productModel.js';

export const getProducts = () => {
  return ProductModel.find();
};

export const addProduct = async (newProduct) => {
  const user = new ProductModel(newProduct);
  try {
    await user.save();
    return "Successfully added new product";
  } catch (error) {
    return error;
  }
};

export const updateProduct = (id, product) => {
  return ProductModel.findByIdAndUpdate(id, product);
};