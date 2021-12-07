import { useContext } from 'react';
import UserContext from '../../../store/user-ctx';

import {
  StyledTasksContainer,
  StyledTaskList,
  StyledTaskHeader,
} from './tasks.styles';
import { StyledInputGroup, StyledInput } from '../../ui/ui-items.styles';
import { theme } from '../../../pages/_app';
import { MdAdd } from 'react-icons/md';
import TaskTile from './task-tile';
import UIBtn from '../../ui/ui-btn';

const Tasks = () => {
  const { user } = useContext(UserContext);
  const { tasks } = user;

  const renderTasks = () => {
    if (user.tasks !== undefined) {
      return tasks.map((task) => (
        <TaskTile
          key={task._id}
          content={task.content}
          dueDate={task.dueDate}
        />
      ));
    }
    return null;
  };

  if (!user) return <div />;

  return (
    <StyledTasksContainer>
      <StyledTaskHeader>
        <h3>Tasks</h3>
        <StyledInputGroup>
          <StyledInput type="text" />
          <UIBtn icon={<MdAdd />} color={theme.colors.turquoise} />
        </StyledInputGroup>
      </StyledTaskHeader>
      <StyledTaskList>
        <ul>{renderTasks()}</ul>
      </StyledTaskList>
    </StyledTasksContainer>
  );
};

export default Tasks;
