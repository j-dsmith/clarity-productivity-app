import mongoose from 'mongoose';

const connectDB = async () => {
  const db = await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return db;
};

export default connectDB;
