// Dependencies
import { useEffect } from 'react';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';

// Style
import { StyledEditorContent } from './editor.styles';

// Components
import ToolBar from './toolbar';

const TiptapEditor = ({ content, currentProjectId, currentNoteId }) => {
  // Initialize Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content[0],
  });

  useEffect(() => {
    // If there is an editor, pass the content from props to the editor to display
    // Updates initialized editor with new content when route and note are changed
    if (editor) {
      editor.commands.setContent(content[0]);
    }
  }, [content]);

  return (
    <>
      <ToolBar
        editor={editor}
        currentProjectId={currentProjectId}
        currentNoteId={currentNoteId}
      />
      <StyledEditorContent editor={editor} />
    </>
  );
};

export default TiptapEditor;
