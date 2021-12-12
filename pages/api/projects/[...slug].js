import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'POST':
      try {
        const { slug } = req.query;
        const [projectId] = slug;
        const { title } = req.body;

        const db = await connectDB();
        const user = await User.findOne({ email });

        // const selectedProject = user.projects.filter(
        //   ({ _id }) => _id == projectId
        // )[0];
        // selectedProject.notes.push({ title: title, content: [] });

        user.projects.forEach((project) => {
          if (project._id == projectId) {
            console.log('match');
            project.notes.push({ title });
            console.log(project);
          }
        });

        await user.save();
        db.disconnect();
        res.status(200).json({
          message: `Note added to project with projectId: ${projectId}`,
        });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
