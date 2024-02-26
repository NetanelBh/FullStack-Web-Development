const usersService = require("./services/usersService");

const USER_ID = 1;

usersService.getUserData(USER_ID).then(data => console.log(data));