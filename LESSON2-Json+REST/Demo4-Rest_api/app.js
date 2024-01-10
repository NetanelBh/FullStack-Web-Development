import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users";

const user = {
  id: 11,
  name: "Netanel",
  username: "Ben hamo",
  age: 36,
};

const getAll = async () => {
  const users = await axios.get(URL);
};

const addUser = async (newUser) => {
  return await axios.post(URL, newUser);
};

const updateUser = async (updatedUser, id) => {
  const url = `${URL}/${id}`;
  return await axios.put(url, updatedUser);
};

const deleteUser = async (id) => {
  const url = `${URL}/${id}`;
  return await axios.delete(url);
};

// Get all users
getAll();
// Add new user
addUser(user).then((user) => console.log(user));
// Update the user with id=10 to the new user I created
updateUser(user, 10).then(updatedUser => console.log(updatedUser));
// Delete user with specific id number
deleteUser(9).then((users) => console.log(users));
