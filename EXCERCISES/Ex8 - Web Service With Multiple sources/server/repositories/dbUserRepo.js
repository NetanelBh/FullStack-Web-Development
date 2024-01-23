import User from '../models/userModel.js';

export const getAllUsers = () => {
  return User.find();
};