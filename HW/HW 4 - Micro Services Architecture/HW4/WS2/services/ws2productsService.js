const productsWS = require("../repositories/productsWSRep");

const getAllProducts = async () => {
  const {data} = await productsWS.getProducts();

  const products = data.map((product) => ({
    id: product.id,
    title: product.title,
  }));

  return products;
};

module.exports = { getAllProducts };
