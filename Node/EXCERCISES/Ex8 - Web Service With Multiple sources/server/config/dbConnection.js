import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/usersDB');
    console.log('Connected to usersDB');
  } catch (error) {
    console.log(error);
  }
};

export default DbConnection;