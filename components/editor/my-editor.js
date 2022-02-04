// Style
import {
  EditorContainer,
  EditorHeader,
  NoteTitleInput,
  NoteTitle,
} from './editor.styles';
import { SpinnerPage } from '../ui/ui-items.styles';

// Helpers
import { fetchContext } from '../../helpers/client';

// Components
import Loader from 'react-loader-spinner';
import TiptapEditor from './tiptap-editor';

const MyEditor = ({ currentNoteId, currentProjectId }) => {
  // Get user stored in context
  const { user } = fetchContext('user');

  // Return Loader if user hasn't been loaded and is an empty object
  if (Object.keys(user).length === 0) {
    return (
      <SpinnerPage>
        <Loader type="Oval" color="hsl(0, 0%, 60%)" height={100} width={100} />
      </SpinnerPage>
    );
  }

  // If there is a user, get the current project and notes using Ids from props
  const currentProject = user.projects.find(
    ({ _id }) => _id === currentProjectId
  );

  const currentNote = currentProject.notes.find(
    ({ _id }) => _id === currentNoteId
  );

  // Get properties from note
  const { title, content } = currentNote;

  // Framer-motion variants
  const editor = {
    closed: {
      opacity: 0,
      x: 0,
      transition: { duration: 0.1 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.1 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.075 },
    },
  };

  return (
    <EditorContainer
      variants={editor}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <EditorHeader>
        {title ? (
          <NoteTitle>{title}</NoteTitle>
        ) : (
          <NoteTitleInput type="text" placeholder="Title" maxLength="50" />
        )}
        {/* <SaveNoteBtn handler={handleSaveNote} saving={saving} /> */}
      </EditorHeader>
      <TiptapEditor
        content={content}
        currentProjectId={currentProjectId}
        currentNoteId={currentNoteId}
      />
    </EditorContainer>
  );
};

export default MyEditor;
