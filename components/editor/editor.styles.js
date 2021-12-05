import styled from 'styled-components';
import { EditorContent } from '@tiptap/react';

export const StyledEditorContainer = styled.div`
  width: 78%;
  height: 100vh;
  min-height: 100vh;
  position: absolute;
  right: 0;
  top: 0;
`;

export const StyledEditorContent = styled(EditorContent)`
  border: 2px solid red;
  padding: 1rem;
  height: 90%;
  width: 100%;
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
  height: 5%;
  position: relative;
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const StyledToolbarBtn = styled.button`
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
