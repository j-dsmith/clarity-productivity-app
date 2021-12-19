// Dependencies
import { useState } from 'react';
import { useSWRConfig } from 'swr';

// Style
import { StyledToolbar, ToolbarBtn } from './editor.styles';
import * as RiIcons from 'react-icons/ri';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { VscClearAll, VscHorizontalRule } from 'react-icons/vsc';
import { IoIosReturnLeft } from 'react-icons/io';

// Helpers
import { updateNote } from '../../helpers/notes';

// Components
import SaveNoteBtn from '../ui/save-note-btn';

const ToolBar = ({ editor, currentProjectId, currentNoteId }) => {
  // Init saving state for button spinner
  const [saving, setSaving] = useState(false);

  const { mutate } = useSWRConfig();

  const handleSaveNote = async () => {
    setSaving(true);
    const currentContent = editor.getJSON();

    const response = await updateNote(
      currentProjectId,
      currentNoteId,
      currentContent
    );
    if (response.statusText === 'OK') {
      setSaving(false);
    }
    mutate('/api/user');
  };

  if (!editor) {
    return null;
  }

  return (
    <StyledToolbar>
      {/* Inline */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <RiIcons.RiBold />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <RiIcons.RiItalic />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <RiIcons.RiUnderline />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <RiIcons.RiStrikethrough />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <RiIcons.RiCodeLine />
      </ToolbarBtn>

      {/* Block */}

      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <RiIcons.RiBracesLine />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <RiIcons.RiParagraph />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH1 />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH2 />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH3 />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH4 />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH5 />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH6 />
      </ToolbarBtn>

      {/* Lists */}

      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <RiIcons.RiListUnordered />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <RiIcons.RiListOrdered />
      </ToolbarBtn>

      {/* Alignment */}

      <ToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignLeft />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignCenter />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignRight />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignJustify />
      </ToolbarBtn>

      {/* Formatting */}
      <ToolbarBtn
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <BsBlockquoteLeft />
      </ToolbarBtn>
      <ToolbarBtn
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <VscHorizontalRule />
      </ToolbarBtn>
      <ToolbarBtn onClick={() => editor.chain().focus().setHardBreak().run()}>
        <IoIosReturnLeft />
      </ToolbarBtn>

      {/* Controls */}

      <ToolbarBtn onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <RiIcons.RiEraserFill />
      </ToolbarBtn>
      <ToolbarBtn onClick={() => editor.chain().focus().clearNodes().run()}>
        <VscClearAll />
      </ToolbarBtn>
      <ToolbarBtn onClick={() => editor.chain().focus().undo().run()}>
        <RiIcons.RiArrowGoBackLine />
      </ToolbarBtn>
      <ToolbarBtn onClick={() => editor.chain().focus().redo().run()}>
        <RiIcons.RiArrowGoForwardLine />
      </ToolbarBtn>
      <SaveNoteBtn saving={saving} handler={handleSaveNote} />
    </StyledToolbar>
  );
};

export default ToolBar;
