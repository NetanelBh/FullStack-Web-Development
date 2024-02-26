import mongoose from 'mongoose';

const DbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/HW6DB');
    console.log('connecting to HW6DB');
  } catch (error) {
    console.log(error);
  }
};

export default DbConnection;