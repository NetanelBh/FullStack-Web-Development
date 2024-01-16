const axios = require("axios");

const URL = 'https://jsonplaceholder.typicode.com/users';

const getUserById = (id) => {
  return axios.get(`${URL}/${id}`);
};

module.exports = {getUserById};