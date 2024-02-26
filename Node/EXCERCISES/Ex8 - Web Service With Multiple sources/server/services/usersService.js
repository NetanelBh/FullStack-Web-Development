import * as wsUserRepo from "../repositories/wsUserRepo.js";
import * as dbUserRepo from "../repositories/dbUserRepo.js";
import * as fileUserRepo from "../repositories/fileUserRepo.js";

export const getAllUsersData = async () => {
  const finalUsers = [];

  try {
    const dbUsers = await dbUserRepo.getAllUsers();
    const { data: wsUsers } = await wsUserRepo.getAllUsers();
    const { persons: fileUsers } = await fileUserRepo.getAllUsers();

    dbUsers.forEach((user) => {
      const newUser = {};

      // Get the user with the specific id from the json file
      const jsonUser = fileUsers.find(({ id }) => id === user.externalId);
      // Get the user with the specific id from the web service(url)
      const wsUser = wsUsers.find(({ id }) => id === user.externalId);
      
      // Insert the user's data to the new user
      newUser.id = wsUser.id;
      newUser.name = wsUser.name;
      newUser.email = wsUser.email;
      newUser.phone = jsonUser.phone;
      newUser.address = { city: user.city, country: user.country };
      
      // Insert the new user to the list
      finalUsers.push(newUser);
    });
  } catch (error) {
    console.log(error);
  }

  return finalUsers;
};
