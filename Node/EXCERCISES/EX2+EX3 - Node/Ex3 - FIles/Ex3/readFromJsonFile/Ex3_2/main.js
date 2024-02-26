import getPersonData from "./utils.js";

// It's async function, therefore return Promise, will extract data with .then()
getPersonData(3)
  .then(personData => console.log(personData))
  .catch(error => console.log(error));
