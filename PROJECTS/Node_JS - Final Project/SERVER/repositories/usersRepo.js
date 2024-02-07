import UserModel from '../models/userModel.js';

export const getUsers = () => {
  return UserModel.find();
};