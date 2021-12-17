import ProjectTile from '../sidebar-items/project-tile';
import { motion } from 'framer-motion';

const ProjectsList = ({ projects, deleteActive, handleDeleteProject }) => {
  const renderProjects = () => {
    if (projects === null) {
      return null;
    }

    return projects.map(({ _id, title, createdAt, notes }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();
      const numNotes = notes.length;
      return (
        <motion.li
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          key={_id}
        >
          <ProjectTile
            id={_id}
            title={title}
            createdAt={formattedTimestamp}
            numNotes={numNotes}
            deleteActive={deleteActive}
            handleDeleteProject={handleDeleteProject}
          />
        </motion.li>
      );
    });
  };

  return <>{renderProjects()}</>;
};

export default ProjectsList;
