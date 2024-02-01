import * as authRepo from "../Repositories/authRepo.js";

export const login = async (username, password) => {
  const user = await authRepo.getUserByUserName(username);
  // If the user not exist in DB
  if (!user) {
    return { success: false, message: "The user does not exist in DB" };
  }
  // If the password the user entered does not match the password in DB
  if (password !== user.password) {
    return { success: false, message: "The password is incorrect" };
  }

  return { success: true, message: "Login successful" };
};
