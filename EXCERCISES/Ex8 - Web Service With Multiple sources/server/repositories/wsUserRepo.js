import axios from 'axios';

export const getAllUsers = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return axios.get(url);
};