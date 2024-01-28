import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/UsersDB');
    console.log('Connected to UserDB');
  } catch (error) {
    console.log(error.message);
  }
};

export default DbConnection;