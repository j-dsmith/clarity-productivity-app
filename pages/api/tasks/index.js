import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'POST':
      try {
        const task = {
          content: req.body.text,
        };
        const db = await connectDB();
        const user = await User.findOne({ email });
        user.tasks.push(task);
        await user.save();
        db.disconnect();
        res.status(200).json({ message: 'Task added successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
