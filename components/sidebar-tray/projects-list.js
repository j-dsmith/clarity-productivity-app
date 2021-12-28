// Dependencies
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSWRConfig } from 'swr';

// Style
import { SpinnerContainer, InputGroup, TextInput } from '../ui/ui-items.styles';
import { ContentList, TrayHeader } from './tray.styles';
import { MdAdd, MdDelete } from 'react-icons/md';
import { theme } from '../../pages/_app';

// Helpers
import { fetchContext } from '../../helpers/client';
import { addProject, deleteProject } from '../../helpers/projects';

// Components
import Loader from 'react-loader-spinner';
import UIBtn from '../ui/ui-btn';
import ProjectTile from '../tray-tiles/project-tile';

const ProjectsList = ({}) => {
  const [newProjectTitle, setNewProjectTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  const { user } = fetchContext('user');

  // Mutate function to refresh data
  const { mutate } = useSWRConfig();

  if (Object.keys(user).length === 0) {
    return (
      <SpinnerContainer>
        <Loader type="Oval" color="hsl(212, 13%, 48%)" height={75} width={75} />
      </SpinnerContainer>
    );
  }

  const handleDeleteProject = async (projectId) => {
    // Run delete task helper to send DELETE request to /api/projects/[projectId]
    const response = await deleteProject(projectId);
    mutate('/api/user');
  };

  const handleAddProject = async () => {
    const response = await addProject(newProjectTitle);
    setNewProjectTitle('');
    mutate('/api/user');
  };

  const toggleDeleteActive = () => {
    setDeleteActive(!deleteActive);
  };

  const { projects } = user;

  const renderProjects = () => {
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

  return (
    <>
      <TrayHeader>
        <h2>Projects</h2>
      </TrayHeader>
      <InputGroup width="100%">
        <TextInput
          value={newProjectTitle}
          onChange={(e) => setNewProjectTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder={deleteActive ? '' : 'Title'}
          disabled={deleteActive}
        />

        <UIBtn
          icon={<MdAdd />}
          color={theme.colors.brandPrimary}
          handler={handleAddProject}
          disabled={!newProjectTitle || deleteActive ? true : false}
        />
        <UIBtn
          icon={<MdDelete />}
          color={theme.colors.bittersweet}
          handler={toggleDeleteActive}
          outline={deleteActive ? false : true}
        />
      </InputGroup>
      <ContentList>
        <ul>{renderProjects()}</ul>
      </ContentList>
    </>
  );
};

export default ProjectsList;
