// Dependencies
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';

// Style
import { InputGroup, TextInput, SpinnerContainer } from '../ui/ui-items.styles';
import { TrayHeader, ContentList, ProjectsLink } from './tray.styles';
import { MdAdd, MdDelete, MdOutlineCancel } from 'react-icons/md';
import { theme } from '../../pages/_app';

// Helpers
import { fetchContext } from '../../helpers/client';
import { addNote, deleteNote } from '../../helpers/notes';

// Components
import NoteTile from '../tray-tiles/note-tile';
import Loader from 'react-loader-spinner';
import UIBtn from '../ui/ui-btn';

const NotesList = ({ currentProjectId }) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  // Mutate function to refresh data
  const { mutate } = useSWRConfig();

  // Get user and tray toggle function stored in context
  const { user } = fetchContext('user');
  const { toggleTrayOpen } = fetchContext('animation');

  const router = useRouter();

  if (Object.keys(user).length === 0) {
    return (
      <SpinnerContainer>
        <Loader type="Oval" color="hsl(0, 0%, 60%)" height={75} width={75} />
      </SpinnerContainer>
    );
  }

  // Get values from current project user projectId passed from params
  const currentProject = user.projects.find(
    ({ _id }) => _id === currentProjectId
  );
  const { title: currentProjectTitle, notes } = currentProject;

  const handleAddNote = async () => {
    const response = await addNote(newNoteTitle, currentProjectId);
    setNewNoteTitle('');
    mutate('/api/user');
  };

  const handleDeleteNote = async (currentProjectId, noteId) => {
    const response = await deleteNote(currentProjectId, noteId);
    mutate('/api/user');
  };

  const toggleDeleteActive = () => {
    setDeleteActive(!deleteActive);
  };

  const renderNotes = () => {
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

  return (
    <>
      <TrayHeader>
        <Link href="/projects">
          <ProjectsLink onClick={() => toggleTrayOpen(true)}>
            Projects
          </ProjectsLink>
        </Link>
        <h2>{currentProjectTitle}</h2>
      </TrayHeader>
      <InputGroup width="100%">
        <TextInput
          value={newNoteTitle}
          onChange={(e) => setNewNoteTitle(e.target.value)}
          type="text"
          maxLength={35}
          placeholder={deleteActive ? '' : 'Title'}
          disabled={deleteActive}
        />

        <UIBtn
          icon={!newNoteTitle || deleteActive ? <MdOutlineCancel /> : <MdAdd />}
          color="var(--color-blue)"
          handler={handleAddNote}
          disabled={!newNoteTitle || deleteActive ? true : false}
        />
        <UIBtn
          icon={<MdDelete />}
          color={theme.colors.bittersweet}
          handler={toggleDeleteActive}
          outline={deleteActive ? false : true}
        />
      </InputGroup>
      <ContentList>
        <ul>{renderNotes()}</ul>
      </ContentList>
    </>
  );
};

export default NotesList;
