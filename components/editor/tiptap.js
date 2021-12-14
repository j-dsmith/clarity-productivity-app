import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import {
  EditorContainer,
  EditorHeader,
  StyledEditorContent,
  NoteTitleInput,
} from './editor.styles';
import ToolBar from './toolbar';
import SaveNoteBtn from '../ui/save-note-btn';

const MyEditor = (initialContent) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '',
  });

  const variants = {
    closed: {
      opacity: 0,
      x: 0,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2, delay: 0.5 },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.075 },
    },
  };

  const handleSaveNote = () => {};

  return (
    <EditorContainer
      variants={variants}
      initial="closed"
      animate="open"
      exit="exit"
    >
      <EditorHeader>
        <NoteTitleInput type="text" placeholder="Title" maxLength="50" />
        <SaveNoteBtn handler={handleSaveNote} />
      </EditorHeader>
      <ToolBar editor={editor} />
      <StyledEditorContent editor={editor} />
    </EditorContainer>
  );
};

export default MyEditor;
