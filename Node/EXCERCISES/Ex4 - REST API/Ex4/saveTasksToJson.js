import axios from "axios";
import jsonfile from "jsonfile";

import GetUser from "./getUser.js";
import GetTodos from "./getTodos.js";

const SaveTasksToJson = async (userName) => {
  const user = await GetUser(userName);
  if (user.name.startsWith("E")) {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    // Get the todos for the specific user with query selector
    const {data: todos} = await GetTodos(`${url}?userId=${user.id}`);
    // Save the title in array per each todo in the array
    const titlesList = todos.map(todo => todo.title);
    // Write the titles list to json file
    await jsonfile.writeFile('./todos.json', {titlesList});

    return user.name;
  } 
  else {
    console.log(`The user name: "${userName}", doesn't start with E`);
  }
};

export default SaveTasksToJson;
