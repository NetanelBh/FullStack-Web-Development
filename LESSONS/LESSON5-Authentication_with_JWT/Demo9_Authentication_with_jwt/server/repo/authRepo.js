import bcrypt from "bcryptjs";

import User from '../models/userModel.js';


export const signup  = async (email, password) => {
  const user = new User({
    email: email,
    password: bcrypt.hashSync(password, 10)
  });

  const newUser = await user.save();
  return newUser;
};

export const login  = (email) => {
  return User.findOne({ email: email});
};