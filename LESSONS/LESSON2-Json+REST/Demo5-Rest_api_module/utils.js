import axios from "axios";

const getAllUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  return await axios.get(url);
};

const getUsersEmails = async () => {
  // Using await to "open" the returned Promise
  const { data } = await getAllUsers();
  
  return data.map(user => user.email);
};

export default getUsersEmails;
