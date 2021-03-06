import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'DELETE':
      try {
        const { taskId } = req.query;

        const db = await connectDB();
        const user = await User.findOne({ email });
        const updatedTasks = user.tasks.filter(({ _id }) => _id != taskId);
        user.tasks = updatedTasks;
        await user.save();
        db.disconnect();
        res.status(200).json({ message: 'Task deleted successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const { taskId } = req.query;

        const db = await connectDB();
        const user = await User.findOne({ email });

        const updatedTasks = user.tasks.filter(({ _id }) => _id != taskId);
        user.tasks = updatedTasks;
        user.tasksCompleted += 1;

        await user.save();
        db.disconnect();
        res
          .status(200)
          .json({ message: 'Task completed and removed from database' });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
