import TaskTile from './task-tile';
import { StyledTasksContainer, StyledTaskList } from './tasks.styles';
import { motion } from 'framer-motion';

const Tasks = () => {
  const colors = [
    'hsl(176, 56%, 55%)',
    'hsl(20, 33%, 98%)',
    'hsl(0, 100%, 71%)',
    'hsl(50, 100%, 71%)',
    'hsl(222, 100%, 61%)',
    'hsl(267, 72%, 82%)',
  ];

  //TODO: add render tasks once tasks are loaded from db
  // apply random color to checkbox circle
  // apply same random color for each tile to border left, same as project tray

  return (
    <StyledTasksContainer>
      <StyledTaskList>
        <h3>Tasks</h3>
        <ul>
          <TaskTile color="hsl(176, 56%, 55%)" />
          <TaskTile color="hsl(176, 56%, 55%)" />
          <TaskTile color="hsl(176, 56%, 55%)" />
        </ul>
      </StyledTaskList>
    </StyledTasksContainer>
  );
};

export default Tasks;
