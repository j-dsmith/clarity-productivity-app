import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TasksContainer = styled.section`
  grid-area: task;
  margin: 0.75em 0.75em 1.5em 1.5em;
  padding-bottom: 2em;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  padding-bottom: 0;

  h2 {
    margin: 0;
  }
`;

export const TaskList = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 1em;
  overflow-y: scroll;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    box-shadow: ${({ theme }) => theme.shadow.md};
    border-block: 1px solid ${({ theme }) => theme.colors.gray700};

    & * + * {
      border-top: 1px solid ${({ theme }) => theme.colors.gray700};
    }
  }
`;

export const StyledTaskTile = styled.div`
  height: 3rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.colors.gray800};

  // Custom Checkbox
  input[type='checkbox'] {
    visibility: hidden;
  }
  label {
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    position: relative;
    border: 2px solid hsl(50, 100%, 71%);
    cursor: pointer;
  }

  p {
    // Remove border applied by adjacent selector in ul
    border: none;
  }

  // Cancel Icon
  svg {
    margin-right: 1rem;
    height: 1.5rem;
    width: 1.5rem;
    color: ${({ theme }) => theme.colors.bittersweet};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray700};
    border-left: 2px solid
      ${({ theme, deleteactive }) =>
        deleteactive === 'true'
          ? theme.colors.bittersweet
          : theme.colors.naplesyellow};

    //TODO: Set border left to color of tile checkbox -> use project tray tiles as reference
  }
`;
