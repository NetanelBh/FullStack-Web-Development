const axios = require("axios");

const URL = "https://jsonplaceholder.typicode.com/todos";

const getTodosByUserId = (userId) => {
  return axios.get(`${URL}?userId=${userId}&_limit=10`);
};

module.exports = {getTodosByUserId};