import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { StyledEditorContainer, StyledEditorContent } from './editor.styles';
import ToolBar from './toolbar';

const MyEditor = () => {
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

  return (
    <StyledEditorContainer>
      <ToolBar editor={editor} />
      <StyledEditorContent editor={editor} />
    </StyledEditorContainer>
  );
};

export default MyEditor;
