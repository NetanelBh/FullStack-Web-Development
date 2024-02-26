const userService = require("./services/usersServices");

const USER_NAME = "Bret";

// userService.getUserDetails(USER_NAME).then(user => console.log(user));
userService
  .getUserDetails(USER_NAME)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
