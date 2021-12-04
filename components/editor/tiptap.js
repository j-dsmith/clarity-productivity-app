import { useState } from 'react';
import * as RiIcons from 'react-icons/ri';
import { useEditor, EditorContent } from '@tiptap/react';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { VscHorizontalRule } from 'react-icons/vsc';
import { GrClear } from 'react-icons/gr';
import { IoIosReturnLeft } from 'react-icons/io';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { StyledEditorContainer } from './editor.styles';

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <RiIcons.RiBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <RiIcons.RiItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <RiIcons.RiUnderline />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <RiIcons.RiStrikethrough />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <RiIcons.RiCodeLine />
      </button>
      <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        <RiIcons.RiEraserFill />
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        <GrClear />
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <RiIcons.RiParagraph />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH1 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH2 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH3 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH4 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH5 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH6 />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <RiIcons.RiListUnordered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <RiIcons.RiListOrdered />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <RiIcons.RiBracesLine />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <BsBlockquoteLeft />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <VscHorizontalRule />
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        <IoIosReturnLeft />
      </button>
      <button onClick={() => editor.chain().focus().undo().run()}>
        <RiIcons.RiArrowGoBackLine />
      </button>
      <button onClick={() => editor.chain().focus().redo().run()}>
        <RiIcons.RiArrowGoForwardLine />
      </button>
    </>
  );
};

export default () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: '',
  });

  return (
    <StyledEditorContainer>
      <MenuBar editor={editor} />
      {/* TODO: Create styled component of editor content to set styles */}
      <EditorContent
        editor={editor}
        style={{ border: '1px solid red', height: '100vh', color: '#fcfaf9' }}
      />
    </StyledEditorContainer>
  );
};
