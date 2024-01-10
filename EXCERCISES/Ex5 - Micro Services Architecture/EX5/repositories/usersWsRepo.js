const axios = require("axios");

const URL = "https://jsonplaceholder.typicode.com/users";

const getUserByUserName = (userName) => {
  return axios.get(`${URL}?username=${userName}`);
};

module.exports = {getUserByUserName};