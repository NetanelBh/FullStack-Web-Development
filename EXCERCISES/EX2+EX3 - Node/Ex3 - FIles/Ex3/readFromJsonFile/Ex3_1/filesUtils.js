// // We can also import as the original name
// import jsonfile from "jsonfile";

// Import the jsonfile with alias
import { default as jFile } from "jsonfile";

// Option2 with require
//// const jFile = require("jsonfile");

const getPersonName = street => {
  return new Promise(resolve => {
    setTimeout(async (num1, num2) => {
      const persons = await jFile.readFile("./persons.json");

      const person = persons.persons.find(person => {
        return person.address.street.name === street;
      });
    
      resolve(person.name);
    }, 2000);
  });
};

export default getPersonName;
