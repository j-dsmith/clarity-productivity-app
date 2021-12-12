import { useState } from 'react';
import { theme } from '../../pages/_app';
import { TrayContainer, TrayHeader, ContentList } from './tray.styles';
import { InputGroup, TextInput } from '../ui/ui-items.styles';
import UIBtn from '../ui/ui-btn';
import { MdAdd, MdFilterList, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { fetchContext } from '../../helpers/client';
import {
  addProject,
  deleteProject,
  fetchProjects,
} from '../../helpers/projects';
import { addNote } from '../../helpers/notes';
import ProjectsList from './projects-list';
import NotesList from './notes-list';

const SidebarTray = ({ route, heading, currentProjectId }) => {
  const { user, setUser } = fetchContext('user');
  const { projects } = user;

  // initialize state for controlled input of either project or note title
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

  const handleAddNote = async () => {
    console.log(title, currentProjectId, route);
    const response = await addNote(title, currentProjectId);
    setTitle('');
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

  return (
    <TrayContainer
      variants={tray}
      initial="closed"
      animate="open"
      // exit="closed"
    >
      <TrayHeader>
        <h2>{heading}</h2>
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
          handler={route === 'project' ? handleAddProject : handleAddNote}
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
        {/* <GeneralFolder /> */}
        {/* Render Projects */}
        {route === 'projects' ? (
          <ProjectsList
            projects={projects}
            deleteActive={deleteActive}
            handleDeleteProject={handleDeleteProject}
          />
        ) : (
          <NotesList
            projects={projects}
            currentProjectId={currentProjectId}
            deleteActive={deleteActive}
            // handleDeleteNote={handleDeleteNote}
          />
        )}
      </ContentList>
    </TrayContainer>
  );
};

export default SidebarTray;
