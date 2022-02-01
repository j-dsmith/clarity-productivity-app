import styled from 'styled-components';
import { motion } from 'framer-motion';

export const TasksContainer = styled.section`
  grid-area: tasks;

  padding-bottom: 2em;
  background-color: var(--component-bg-dark);
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray700};
    border-left: 2px solid
      ${({ theme, deleteactive }) =>
        deleteactive === 'true'
          ? theme.colors.bittersweet
          : theme.colors.brandPrimary};
  }
  p {
    // Remove border applied by adjacent selector in ul
    border: none;
    font-size: 1.25rem;
  }
`;

export const CheckboxGroup = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  padding: 1em;
  margin-right: 1em;

  // Custom Checkbox
  input[type='checkbox'] {
    visibility: hidden;
    position: absolute;
  }

  .delete-icon {
    font-size: 1.75rem;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  display: grid;
  place-items: center;
  position: relative;

  div {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: ${({ theme, ischecked }) => theme.colors.cultured};
  }

  svg {
    padding: 0;
    position: relative;
    z-index: 1;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.brandPrimary};
    border: none;
  }
`;
