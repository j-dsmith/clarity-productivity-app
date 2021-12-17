import connectDB from '../../../helpers/db';
import { User } from '../../../models/user';
import { getSession } from 'next-auth/react';

const handler = async (req, res) => {
  const session = await getSession({ req });
  const { email } = session.user;

  switch (req.method) {
    case 'GET':
      try {
        const { slug } = req.query;
        const [projectId, , noteId] = slug;

        const db = await connectDB();
        const user = await User.findOne({ email });

        const selectedProject = user.projects.find(
          ({ _id }) => _id == projectId
        );

        const selectedNote = selectedProject.notes.find(
          ({ _id }) => _id == noteId
        );

        db.disconnect();
        res.status(200).json({
          selectedNote,
        });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;

    case 'POST':
      try {
        const { slug } = req.query;
        const [projectId] = slug;
        const { title } = req.body;

        const db = await connectDB();
        const user = await User.findOne({ email });

        user.projects.forEach((project) => {
          if (project._id == projectId) {
            project.notes.push({ title });
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
      break;

    case 'DELETE':
      try {
        const { slug } = req.query;
        const [projectId, notes, noteId] = slug;

        const db = await connectDB();
        const user = await User.findOne({ email });

        user.projects.forEach((project) => {
          if (project._id == projectId) {
            const updatedNotes = project.notes.filter(
              ({ _id }) => _id != noteId
            );
            project.notes = updatedNotes;
          }
        });
        await user.save();
        db.disconnect();
        res.status(200).json({
          message: `Note delete from project with projectId: ${projectId}`,
        });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
      break;

    case 'PUT':
      try {
        const currentContent = req.body;
        const { slug } = req.query;
        const [projectId, , noteId] = slug;

        const db = await connectDB();
        const user = await User.findOne({ email });

        user.projects.forEach((project) => {
          if (project._id == projectId) {
            project.notes.forEach((note) => {
              if (note._id == noteId) {
                note.content = currentContent;
              }
            });
          }
        });

        await user.save();
        db.disconnect();
        res.status(200).json({
          message: `Note with id: ${noteId} updated from projectId: ${projectId}`,
        });
      } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
      }
  }
};

export default handler;
