import mongoose from "mongoose";

const DbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/subscriptionsDB");
    console.log("Connected to subscriptionsDB");
  } catch (error) {
    throw new Error(error.message);
  }
};

export default DbConnection;
