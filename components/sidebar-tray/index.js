import { useState } from 'react';
import Link from 'next/link';
import { TrayContainer, TrayHeader, ContentList } from './tray.styles';
import { InputGroup, TextInput } from '../ui/ui-items.styles';
import UIBtn from '../ui/ui-btn';
import GeneralFolder from '../sidebar-items/general-folder';
import ProjectTile from '../sidebar-items/project-tile';
import { MdAdd, MdFilterList, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { theme } from '../../pages/_app';
import { fetchContext } from '../../helpers/client';
import {
  addProject,
  deleteProject,
  fetchProjects,
} from '../../helpers/projects';

const SidebarTray = ({ staticTray }) => {
  const { user, setUser } = fetchContext('user');
  const { projects } = user;

  // Initialize active state for tray type
  const [trayType, setTrayType] = useState('projects');
  // initialize state for controlled input
  const [title, setTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  const tray = {
    closed: {
      left: '-30%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      left: '0%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  const handleAddProject = async () => {
    const response = await addProject(title);
    setTitle('');
    await handleFetchProjects();
  };

  const handleDeleteProject = async (projectId) => {
    // Run delete task helper to send DELETE request to /api/projects/[projectId]
    const response = await deleteProject(projectId);

    await handleFetchProjects();
  };

  const handleFetchProjects = async () => {
    const response = await fetchProjects();
    const { projects } = response.data;
    setUser({ ...user, projects });
  };

  const toggleDeleteActive = () => {
    setDeleteActive(!deleteActive);
  };

  const renderProjects = () => {
    if (projects === undefined) {
      return null;
    }

    return projects.map(({ _id, title, createdAt, notes }) => {
      const formattedTimestamp = new Date(createdAt).toLocaleDateString();
      const numNotes = notes.length;
      return (
        <ProjectTile
          key={_id}
          id={_id}
          title={title}
          createdAt={formattedTimestamp}
          numNotes={numNotes}
          deleteActive={deleteActive}
          handler={handleDeleteProject}
        />
      );
    });
  };

  const renderNotes = (projectId) => {};

  return (
    <TrayContainer
      variants={tray}
      initial={staticTray ? 'open' : 'closed'}
      animate="open"
      // exit="closed"
    >
      <TrayHeader>
        <h2>{trayType === 'projects' ? 'Projects' : 'PROJECT_TITLE'}</h2>
        <BsTagsFill />
      </TrayHeader>
      <InputGroup width="100%">
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder="Title"
        />

        <UIBtn
          icon={<MdAdd />}
          color={theme.colors.turquoise}
          outline
          handler={handleAddProject}
          disabled={!title ? true : false}
        />
        <UIBtn
          icon={<MdDelete />}
          color={theme.colors.bittersweet}
          handler={toggleDeleteActive}
          outline={deleteActive ? false : true}
        />
      </InputGroup>
      {/* 
          Add info row, column headers table style. (title, current sort order, more?) 
          <SidebarBtn icon={<MdFilterList />} color={theme.colors.bluecrayola} />
      */}
      <ContentList>
        <GeneralFolder />
        {/* Render Projects */}

        {renderProjects()}
      </ContentList>
    </TrayContainer>
  );
};

export default SidebarTray;
