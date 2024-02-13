import jsonfile from 'jsonfile';

const JSONPATH = process.cwd() + '/data/usersData.json';

export const getUsersData = () => {

  return jsonfile.readFile(JSONPATH);
};

export const addActionData = (action) => {
  return jsonfile.writeFile(JSONPATH, action);
};