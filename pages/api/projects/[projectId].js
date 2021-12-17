import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'GET':
      try {
        const { projectId } = req.query;

        const db = await connectDB();
        const user = await User.findOne({ email });
        const selectedProject = user.projects.find(
          ({ _id }) => _id == projectId
        );

        db.disconnect();
        res.status(200).json({ selectedProject });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;

    case 'DELETE':
      try {
        const { projectId } = req.query;

        const db = await connectDB();
        const user = await User.findOne({ email });
        const updatedProjects = user.projects.filter(
          ({ _id }) => _id != projectId
        );
        user.projects = updatedProjects;
        await user.save();
        db.disconnect();
        res.status(200).json({ message: 'Project deleted successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
