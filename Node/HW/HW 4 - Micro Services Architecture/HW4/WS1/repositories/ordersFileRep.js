const jf = require('jsonfile');

const path = require('path');
const jsonPath = path.join(__dirname, '../data/orders.json');

const GetAllOrders = async () => {
  return jf.readFile(jsonPath);
}

module.exports = {GetAllOrders};