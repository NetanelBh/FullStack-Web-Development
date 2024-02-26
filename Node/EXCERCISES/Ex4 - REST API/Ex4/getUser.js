import axios from "axios";

const GetUser = async (userName) => {
  const url = 'https://jsonplaceholder.typicode.com/users';
  const {data: users} = await axios.get(`${url}?username=${userName}`);
  
  return users[0];
};

export default GetUser;