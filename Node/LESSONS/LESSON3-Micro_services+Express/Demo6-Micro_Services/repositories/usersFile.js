const jf = require('jsonfile');

const FILE = './data/users.json';

const getUsers = () => {
  return jf.readFile(FILE);
};

module.exports = {getUsers};