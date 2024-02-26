import * as productRepo from '../repositories/productRepo.js';

export const getAllProducts = () => {
  return productRepo.getAllProducts();
};

export const getProductById = (args) => {
  const {id} = args;
  if(!id) {
    console.log("Please enter id");
    return;
  }
  
  return productRepo.getProductById(id);
};

export const addProduct = async (args) => {
  const {product} = args;
  if(!product) {
    return {success: false, data:"Please enter a product"};
  }

  try {
    const resp = await productRepo.addProduct(product);
    if(resp) {
      return {success: true, data: "Added product successfully"};
    } else {
      return {success: false, data: "Can't add product"};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};

export const updateProduct = async (args) => {
  const {id, product} = args;
  if(!id || !product) {
    return {success: false, data: "Please enter a valid id and product"};
  }

  try {
    const resp = await productRepo.updateProduct(id, product);
    if(resp) {
      return {success: true, data: "Updated product successfully"};
    } else {
      return {success: false, data: "Can't update product"};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};

export const deleteProduct = async (args) => {
  const {id} = args;
  if(!id) {
    return {success: false, data: "Please enter a valid id"};
  }

  try {
    const resp = await productRepo.deleteProduct(id);
    if(resp) {
      return {success: true, data: "Deleted product successfully"};
    } else {
      return {success: false, data: "Can't delete product"};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};

export const getProductsExpensiveFrom = (args) => {
  const {price} = args;
  if(!price) {
    console.log("Please enter a valid price");
    return;
  };

  return productRepo.getProductsExpensiveFrom(price);
};

export const updatePrice = async (args) => {
  const {id, price} = args;
  if(!price || !price) {
    return {success: false, data: "Please enter a valid id and price"};
  }

  try {
    const resp = await productRepo.updatePrice(id, price);
    if(resp) {
      return {success: true, data: "Price updated successfully"};
    } else {
      return {success: false, data: "Can't update the product's price"};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};

export const deleteProductsByColor = async (args) => {
  const {color} = args;
  if(!color) {
    return {success: false, data: "Please enter a valid color"};
  }

  try {
    const resp = await productRepo.deleteProductsByColor(color);
    if(resp) {
      return {success: true, data: "Product deleted successfully"};
    } else {
      return {success: false, data: "Can't delete the product"};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};