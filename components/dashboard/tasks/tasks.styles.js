import styled from 'styled-components';
import { motion } from 'framer-motion';
import { StyledInput } from '../../sidebar-tray/tray.styles';

export const StyledTasksContainer = styled.section`
  /* padding: 2rem; */
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledTaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem 0 1rem;

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

export const StyledTaskTile = styled.li`
  height: 3rem;
  padding: 2rem;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-left: 2px solid ${({ theme }) => theme.colors.gray800};

  p {
    margin: 0 1rem;
  }

  .date {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.gray200};
    font-style: italic;
  }

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

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray700};
    border-left: 2px solid ${({ theme }) => theme.colors.naplesyellow};

    //TODO: Set border left to color of tile checkbox -> use project tray tiles as reference
  }
`;
