import Utils from "./utils.js";

Utils()
  .then((movies) => console.log(movies))
  .catch((err) => console.log(err));
