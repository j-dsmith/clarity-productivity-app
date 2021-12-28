import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'PUT':
      try {
        const db = await connectDB();
        const user = await User.findOneAndUpdate(
          {
            email,
          },
          {
            $inc: { pomodorosCompleted: 1 },
          },
          { new: true }
        );

        user.save();
        db.disconnect();
        res.status(200).json({ message: 'Pomodoro completions incremented' });
      } catch (error) {
        console.log(error.message);
        db.disconnect();
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
