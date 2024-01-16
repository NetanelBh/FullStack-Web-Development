import getUsersEmails from "./utils.js";

getUsersEmails()
  .then((emails) => console.log(emails))
  .catch((error) => console.log(error));
