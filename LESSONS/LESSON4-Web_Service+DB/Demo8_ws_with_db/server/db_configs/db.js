import mongoose from "mongoose";

const DbConnection = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/ordersDB");
    console.log("Connected to ordersDB");
  } catch (error) {
    console.error;
  }

};

export default DbConnection;