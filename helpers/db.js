import mongoose from 'mongoose';
// import { User } from '../models/user';
import { omit } from 'lodash';

const connectDB = async () => {
  const db = await mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  return db;
};

// export const getProtectedUser = async (email) => {
//   const db = await connectDb();
//   const user = await User.findOne({ email });
//   console.log(user);
//   db.disconnect();
//   return protectedUser;
// };

export default connectDB;
