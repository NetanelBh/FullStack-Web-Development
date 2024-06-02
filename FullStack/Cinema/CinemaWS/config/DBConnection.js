import mongoose from "mongoose";

const DBConnection = async () => { 
    try {
        await mongoose.connect("mongodb://localhost:27017/employeesDB");
        console.log("Connected to employeesDB");
    } catch (error) {
        throw new Error(error.message);
    }
}; 

export default DBConnection;

