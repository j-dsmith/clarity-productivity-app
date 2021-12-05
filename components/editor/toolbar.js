import { StyledToolbar, StyledToolbarBtn } from './editor.styles';
import * as RiIcons from 'react-icons/ri';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { VscClearAll, VscHorizontalRule } from 'react-icons/vsc';
import { IoIosReturnLeft } from 'react-icons/io';

const ToolBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <StyledToolbar>
      {/* Inline */}
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <RiIcons.RiBold />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <RiIcons.RiItalic />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <RiIcons.RiUnderline />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <RiIcons.RiStrikethrough />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <RiIcons.RiCodeLine />
      </StyledToolbarBtn>

      {/* Block */}

      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        <RiIcons.RiBracesLine />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <RiIcons.RiParagraph />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH1 />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH2 />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH3 />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH4 />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH5 />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        <RiIcons.RiH6 />
      </StyledToolbarBtn>

      {/* Lists */}

      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <RiIcons.RiListUnordered />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <RiIcons.RiListOrdered />
      </StyledToolbarBtn>

      {/* Alignment */}

      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignLeft />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignCenter />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignRight />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
        className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}
      >
        <RiIcons.RiAlignJustify />
      </StyledToolbarBtn>

      {/* Formatting */}
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        <BsBlockquoteLeft />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        <VscHorizontalRule />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        <IoIosReturnLeft />
      </StyledToolbarBtn>

      {/* Controls */}

      <StyledToolbarBtn
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        <RiIcons.RiEraserFill />
      </StyledToolbarBtn>
      <StyledToolbarBtn
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        <VscClearAll />
      </StyledToolbarBtn>
      <StyledToolbarBtn onClick={() => editor.chain().focus().undo().run()}>
        <RiIcons.RiArrowGoBackLine />
      </StyledToolbarBtn>
      <StyledToolbarBtn onClick={() => editor.chain().focus().redo().run()}>
        <RiIcons.RiArrowGoForwardLine />
      </StyledToolbarBtn>
    </StyledToolbar>
  );
};

export default ToolBar;
