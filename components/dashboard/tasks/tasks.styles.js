import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledTasksContainer = styled.section`
  padding: 1rem;
  margin: 0 0.5rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.cultured};
  border-radius: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow.xl};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const StyledTaskList = styled.div`
  height: 100%;
  width: 100%;
  h3 {
    margin: 0;
    padding: 1rem;
    font-size: 1.5rem;
  }

  ul {
    list-style: none;
    margin: 0 -1rem;
    padding: 0;
  }
`;

export const StyledTaskTile = styled.li`
  height: 3rem;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

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
    //TODO: Set border left to color of tile checkbox -> use project tray tiles as reference
  }
`;
