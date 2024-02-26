import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/HW7productsDB");
    console.log("Connected to productDB");
  } catch (error) {
    console.log(error);
  }
};

export default DbConnection;