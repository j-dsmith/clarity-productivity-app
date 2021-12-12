import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'GET':
      try {
        const db = await connectDB();
        const user = await User.findOne({ email });
        res.status(200).json({ projects: user.projects });
        db.disconnect();
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { projectTitle } = req.body;
        const newProject = { title: projectTitle };
        const db = await connectDB();
        const user = await User.findOne({ email });
        user.projects.push(newProject);
        await user.save();
        db.disconnect();
        res.status(200).json({ message: 'Project added successfully' });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;
  }
};

export default handler;
