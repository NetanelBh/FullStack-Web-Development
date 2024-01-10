const jf = require("jsonfile");

const FILE = './data/users.json';

const getUsersFromJson = () => {
  return jf.readFile(FILE);
};

module.exports = {getUsersFromJson}