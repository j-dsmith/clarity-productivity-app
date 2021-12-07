import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const session = await getSession({ req });
    const { email } = session.user;

    try {
      await connectDB();
      const user = await User.findOne({ email });
      if (user) {
        res.status(200).json({ user });
      }
    } catch (error) {
      console.log('error from user api route');
      res.status(400).json({ message: error.message });
    }
  }
};

export default handler;
