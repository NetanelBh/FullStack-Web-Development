import {default as jf} from "jsonfile";

const jsonPath = './users.json';

const addUserToJson = async (newUser) => {
  const json = await jf.readFile(jsonPath);

  json.users.push(newUser);
  await jf.writeFile(jsonPath, json);
};

export default addUserToJson;