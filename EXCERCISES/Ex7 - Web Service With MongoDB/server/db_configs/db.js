import mongoose from 'mongoose';

const DbConnection = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/moviesDB');
  } catch (error) {
    console.error(error);
  }
};

export default DbConnection;