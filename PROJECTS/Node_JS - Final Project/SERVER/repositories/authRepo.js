import axios from 'axios';

export const login = (user) => {
  const url = `https://jsonplaceholder.typicode.com/users?username=${user}`;
  
  return axios.get(url);
};