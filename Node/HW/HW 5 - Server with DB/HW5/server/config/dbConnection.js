import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/studentDB');
    console.log('Connected to studentDB');
  } catch (error) {
    console.log(error);
  }
};

export default DbConnection;