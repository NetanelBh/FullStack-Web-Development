import getPersonName from "./filesUtils.js";

//Option2 with require
//// const fileUtils = require("./filesUtils");

getPersonName("Refael Eitan").then(name => console.log(name));