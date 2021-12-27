import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';

const handler = async (req, res) => {
  const { userId } = req.query;

  switch (req.method) {
    case 'DELETE':
      try {
        const db = await connectDB();
        const response = await User.deleteOne({ _id: userId });
        res.status(200).json({ message: 'User successfully deleted' });
        db.disconnect();
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;
  }
};

export default handler;
