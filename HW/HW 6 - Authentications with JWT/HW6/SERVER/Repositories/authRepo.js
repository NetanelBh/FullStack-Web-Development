import UserModel from '../Models/userModel.js';

export const getUserByUserName = (username) => {
  return UserModel.findOne({username});
};