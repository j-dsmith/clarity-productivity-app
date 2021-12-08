import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTasksContainer = styled.section`
  /* padding: 2rem; */
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledTaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 2rem 0 2rem;

  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
`;

export const StyledTaskList = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  overflow-y: scroll;

  ul {
    list-style: none;
    padding: 0;
  }
`;

export const StyledTaskTile = styled(motion.li)`
  height: 3rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.colors.gray800};
  border-top: 1px solid ${({ theme }) => theme.colors.gray700};
  box-shadow: ${({ theme }) => theme.shadow.md};

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
