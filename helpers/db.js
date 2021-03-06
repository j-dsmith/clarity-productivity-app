// Dependencies
import mongoose from 'mongoose';
import axios from 'axios';

const connectDB = async () => {
  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return db;
};

export const fetchProtectedUser = async () => {
  const response = await axios.get('/api/user');

  return response.data.user;
};

export const serializeData = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export default connectDB;
