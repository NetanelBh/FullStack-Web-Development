const axios = require('axios');

const serverUrl = 'http://localhost:3000/products';

const getProducts = () => {
  return axios.get(serverUrl);
};

module.exports = {getProducts};