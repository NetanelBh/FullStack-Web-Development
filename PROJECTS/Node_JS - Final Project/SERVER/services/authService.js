import * as authRepo from '../repositories/authRepo.js';

export const login =  async (user, email) => {
  try {
    const returnedUser = await authRepo.login(user);
    if(!returnedUser) {
      return {success: false, data: 'User not found'};
    }
    
    if(returnedUser.data[0].email !== email) {
      return {success: false, data: 'Wrong email'};
    } else {
      return {success: true, data: 'Successfully logged in'};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};