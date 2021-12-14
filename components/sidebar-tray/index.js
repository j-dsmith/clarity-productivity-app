import { useState } from 'react';
import { useRouter } from 'next/router';
import { theme } from '../../pages/_app';
import { TrayContainer, TrayHeader, ContentList } from './tray.styles';
import { InputGroup, TextInput, SpinnerContainer } from '../ui/ui-items.styles';
import UIBtn from '../ui/ui-btn';
import { MdAdd, MdDelete } from 'react-icons/md';
import { BsTagsFill } from 'react-icons/bs';
import { refreshData } from '../../helpers/client';
import { addProject, deleteProject } from '../../helpers/projects';
import { addNote, deleteNote } from '../../helpers/notes';
import ProjectsList from './projects-list';
import NotesList from './notes-list';
import Loader from 'react-loader-spinner';

const SidebarTray = ({
  route,
  heading,
  notes,
  projects,
  currentProjectId,
  trayFixed,
}) => {
  // initialize state for controlled input of either project or note title
  const [title, setTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  const router = useRouter();

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
    refreshData(router);
  };

  const handleAddNote = async () => {
    const response = await addNote(title, currentProjectId);
    setTitle('');
    refreshData(router);
  };

  const handleDeleteProject = async (projectId) => {
    // Run delete task helper to send DELETE request to /api/projects/[projectId]
    const response = await deleteProject(projectId);
    refreshData(router);
  };

  const handleDeleteNote = async (currentProjectId, noteId) => {
    const response = await deleteNote(currentProjectId, noteId);
    refreshData(router);
  };

  const toggleDeleteActive = () => {
    setDeleteActive(!deleteActive);
  };

  return (
    <TrayContainer
      variants={tray}
      initial={trayFixed ? 'open' : 'closed'}
      animate="open"
      // exit="closed"
    >
      <TrayHeader>
        <h2>{heading}</h2>
        {route === 'projects' && <BsTagsFill />}
      </TrayHeader>
      <InputGroup width="100%">
        <TextInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder={deleteActive ? '' : 'Title'}
          disabled={deleteActive}
        />

        <UIBtn
          icon={<MdAdd />}
          color={theme.colors.brandPrimary}
          handler={route === 'projects' ? handleAddProject : handleAddNote}
          disabled={!title || deleteActive ? true : false}
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
        {/* Render Projects */}

        {route === 'projects' ? (
          <ProjectsList
            projects={projects}
            deleteActive={deleteActive}
            handleDeleteProject={handleDeleteProject}
          />
        ) : (
          <NotesList
            notes={notes}
            deleteActive={deleteActive}
            handleDeleteNote={handleDeleteNote}
            currentProjectId={currentProjectId}
          />
        )}
      </ContentList>
      {!projects && route === 'projects' && (
        <SpinnerContainer>
          <Loader
            type="Oval"
            color="hsl(212, 13%, 48%)"
            height={75}
            width={75}
          />
        </SpinnerContainer>
      )}
    </TrayContainer>
  );
};

export default SidebarTray;
