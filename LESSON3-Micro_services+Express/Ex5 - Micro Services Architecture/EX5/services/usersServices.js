const usersWs = require("../repositories/usersWsRepo");
const userFile = require("../repositories/usersFilesRepo");
const usersTodosWs = require("../repositories/usersTodosWsRepo");

const getUserDetails = async (userName) => {
  const userData = {};

  // Get the user by userName
  const { data: user } = await usersWs.getUserByUserName(userName);
  userData.name = user[0].name;
  userData.email = user[0].email;

  // Get the first 10 todos from the url(by query string)
  const user10Todos = (await usersTodosWs.getTodosByUserId(user[0].id)).data;
  userData.todosTitles = user10Todos.map((todo) => todo.title);

  // Read the users from the json
  const fileUsers = await userFile.getUsersFromJson();
  // Find the specific user by the username
  const specificUser = fileUsers.users.find(
    (user) => user.username === userName
  );

  userData.phones = specificUser.phones;

  return userData;
};

module.exports = { getUserDetails };
