import NoteTile from '../sidebar-items/note-tile';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const NotesList = ({
  selectedProject,
  handleDeleteNote,
  deleteActive,
  currentProjectId,
}) => {
  const router = useRouter();

  console.log(router);
  const renderNotes = () => {
    if (!selectedProject) {
      return;
    }

    const { notes } = selectedProject;

    return notes.map(({ title, _id, createdAt }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();

      if (router.pathname === '/projects/[...slug]') {
        return (
          <li key={_id}>
            <NoteTile
              key={_id}
              noteId={_id}
              currentProjectId={currentProjectId}
              title={title}
              createdAt={formattedTimestamp}
              handleDeleteNote={handleDeleteNote}
              deleteActive={deleteActive}
            />
          </li>
        );
      }

      return (
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          key={_id}
        >
          <NoteTile
            noteId={_id}
            currentProjectId={currentProjectId}
            title={title}
            createdAt={formattedTimestamp}
            handleDeleteNote={handleDeleteNote}
            deleteActive={deleteActive}
          />
        </motion.li>
      );
    });
  };
  return <>{renderNotes()}</>;
};

export default NotesList;
