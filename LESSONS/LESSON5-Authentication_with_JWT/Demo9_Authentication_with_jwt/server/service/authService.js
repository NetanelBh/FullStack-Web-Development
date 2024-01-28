import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

import * as authRepo from "../repo/authRepo.js";

export const signup = async (email, password) => {
  if (!email || !password) {
    return {success: false, content: "Send headed params"};
  };

  try {
    const user = await authRepo.signup(email, password);
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        password: user.password,
      },
      process.env.SECRET_KEY
    );

    return { success: true, content: token };
  } catch (error) {
    return { success: false, content: "User does not exist"};
  }
};

export const login = async (email, password) => {
  if (!email || !password) {
    return {success: false, content: "Send needed params"};
  }

  try {
    const user = await authRepo.login(email, password);
    if (!bcrypt.compareSync(password, user.password)) {
      return {success: false, content: "Wrong password"};
    } else {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          password: user.password,
        },
        process.env.SECRET_KEY
      );

      return {success: true, content: token};
    }
  } catch (error) {
    return {success: false, content: "User doesn't exist"};
  }
};