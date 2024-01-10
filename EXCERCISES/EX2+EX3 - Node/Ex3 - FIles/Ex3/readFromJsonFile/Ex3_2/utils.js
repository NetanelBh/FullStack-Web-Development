import jsonfile from "jsonfile";

const getPersonData = async (id) => {
  // Reading from source is async operation
  const {users} = await jsonfile.readFile("./data/users.json");
  const {phones} = await jsonfile.readFile("./data/phones.json");

  const resObj = {id};
  // Iterate over the users array and get the name with the given id
  const user = users.find(user => user.id === id);
  resObj.name = user.name;

  const userPhones = phones.find(user => user.userId === id)
  resObj.phones = userPhones.phones;

  return resObj;
};

export default getPersonData;
