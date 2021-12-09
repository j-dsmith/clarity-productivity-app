import styled from 'styled-components';
import { motion } from 'framer-motion';
import { EditorContent } from '@tiptap/react';

export const EditorContainer = styled(motion.div)`
  width: 78%;
  height: clamp(100vh, 100vh, 100vh);
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const EditorHeader = styled.div`
  flex-basis: 10%;
  background-color: ${({ theme }) => theme.colors.gray500};
  display: flex;
  align-items: center;
`;

export const NoteTitleInput = styled.input`
  height: 100%;
  width: 35ch;
  margin: 0;
  padding: 0 0 0 0.5em;
  border: none;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;

export const StyledEditorContent = styled(EditorContent)`
  padding: 2em;
  flex-basis: 85%;
  position: relative;
  overflow-y: scroll;
  color: ${({ theme }) => theme.colors.cultured};

  //* Auto-assigned class for content editable div holding editor content
  .ProseMirror {
    height: 100%;

    p {
      line-height: 1.5rem;
      padding: 0;
      margin: 0;
    }

    &:focus {
      outline: none;
    }

    > * + * {
      margin-top: 0.75em;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.1;
    }

    code {
      color: ${({ theme }) => theme.colors.gray100};
    }

    pre {
      background-color: ${({ theme }) => theme.colors.gray900};
      color: ${({ theme }) => theme.colors.cultured};
      font-family: 'JetBrainsMono', monospace;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;

      code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.95rem;
      }
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid ${({ theme }) => theme.colors.gray300};
    }

    hr {
      border: none;
      border-top: 2px solid ${({ theme }) => theme.colors.gray300};
      margin: 2rem 0;
    }
  }
`;

export const StyledToolbar = styled.div`
  flex-basis: 5%;
  position: relative;
  border-block: 1px solid ${({ theme }) => theme.colors.gray800};
  padding: 0.5em 1em;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const ToolbarBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.cultured};
  cursor: pointer;
  border-radius: 20%;
  transition: all 100ms ease-in-out;
  border: 1px solid transparent;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow.xl};
    background-color: ${({ theme }) => theme.colors.gray800};
    border: 1px solid ${({ theme }) => theme.colors.gray600};
  }

  &.is-active {
    box-shadow: ${({ theme }) => theme.shadow.xl};
    background-color: ${({ theme }) => theme.colors.gray800};
    border: 1px solid ${({ theme }) => theme.colors.gray600};
  }

  svg {
    height: 1.25rem;
    width: 1.25rem;
  }
`;
