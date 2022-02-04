import styled from 'styled-components';

export const TasksContainer = styled.section`
  grid-area: tasks;
  padding-bottom: 2em;
  background-color: var(--component-bg-light);
  color: var(--text-dark);
  border-radius: 1.5rem;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TaskHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  flex-grow: 1;
  padding: 1.5em;
  padding-bottom: 0;

  h2 {
    margin: 0;
  }
`;

export const TaskList = styled.div`
  flex-grow: 2;
  margin-bottom: 1em;
  padding: 0.5em 0;
  border-bottom: 1px solid var(--color-gray-400);
  overflow-y: scroll;

  ul {
    list-style: none;
    padding: 0 1.5em;
    margin: 0;
    border-top: 1px solid var(--component-bg-light);
    position: relative;
  }
`;

export const StyledTaskTile = styled.div`
  cursor: pointer;
  transition: all 100ms ease-in-out;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-gray-400);
  border-radius: 1rem;
  margin-bottom: 0.5em;
  transition: all 150ms linear;

  &:hover {
    box-shadow: var(--shadow-sm);
    transform: scale(1.02) translateY(-2px);
  }
  p {
    // Remove border applied by adjacent selector in ul
    border: none;
    font-size: 1rem;
  }
`;

export const CheckboxGroup = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  padding: 0.5em;
  margin-right: 1em;

  // Custom Checkbox
  input[type='checkbox'] {
    visibility: hidden;
    position: absolute;
  }

  .delete-icon {
    font-size: 1.75rem;
    color: var(--color-red);
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
    background-color: var(--text-light);
  }

  svg {
    padding: 0;
    position: relative;
    z-index: 1;
    font-size: 1.75rem;
    color: var(--color-blue);
    border: none;
  }
`;
