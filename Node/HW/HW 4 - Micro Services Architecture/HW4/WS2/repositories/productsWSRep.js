const axios = require("axios");

const URL = "https://fakestoreapi.com/products";

const getProducts = () => {
  return axios.get(URL);
};

module.exports = { getProducts };
