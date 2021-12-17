import { useState } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import {
  EditorContainer,
  EditorHeader,
  StyledEditorContent,
  NoteTitleInput,
  NoteTitle,
} from './editor.styles';
import ToolBar from './toolbar';
import SaveNoteBtn from '../ui/save-note-btn';
import { updateNote } from '../../helpers/notes';
import { refreshData } from '../../helpers/client';
import { useRouter } from 'next/router';
import { SpinnerPage } from '../ui/ui-items.styles';
import Loader from 'react-loader-spinner';

const MyEditor = ({ note, currentProjectId }) => {
  if (!note) {
    return (
      <SpinnerPage>
        <Loader
          type="Oval"
          color="hsl(212, 13%, 48%)"
          height={100}
          width={100}
        />
      </SpinnerPage>
    );
  }

  // Init saving state for button spinner
  const [saving, setSaving] = useState(false);
  // Get properties from note
  const { title, content, _id } = note;
  // Set starting content
  const startingContent = content && content.length > 0 ? content[0] : '';

  const router = useRouter();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: startingContent,
  });

  const variants = {
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

  const handleSaveNote = async () => {
    setSaving(true);
    const currentContent = editor.getJSON();
    const response = await updateNote(currentProjectId, _id, currentContent);
    if (response.statusText === 'OK') {
      setSaving(false);
    }
    refreshData(router);
  };

  return (
    <EditorContainer
      variants={variants}
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
        <SaveNoteBtn handler={handleSaveNote} saving={saving} />
      </EditorHeader>
      <ToolBar editor={editor} />
      <StyledEditorContent editor={editor} />
    </EditorContainer>
  );
};

export default MyEditor;
