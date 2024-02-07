import * as userRepo from '../repositories/usersRepo.js';

export const getUsers = () => {
  return userRepo.getUsers();
};