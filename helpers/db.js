import mongoose from 'mongoose';
import { omit } from 'lodash';
import axios from 'axios';

const connectDB = async () => {
  const db = await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return db;
};

export const fetchProtectedUser = async () => {
  const response = await axios.get('/api/user');

  return response.data.user;
};

export const addTask = async (text) => {
  const response = await axios.post('/api/tasks', {
    text,
  });

  return response;
};

export default connectDB;
