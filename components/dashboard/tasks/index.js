import { useContext, useState } from 'react';
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
import { addTask } from '../../../helpers/db';

const Tasks = () => {
  const [taskTitle, setTaskTitle] = useState('');
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

  const handleAddTask = async () => {
    console.log('clicked');
    const response = await addTask(taskTitle);
    console.log(response);
  };

  if (!user) return <div />;

  return (
    <StyledTasksContainer>
      <StyledTaskHeader>
        <h3>Tasks</h3>
        <StyledInputGroup width="80%">
          <StyledInput
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <button onClick={() => handleAddTask()}></button>
          <UIBtn
            icon={<MdAdd />}
            color={theme.colors.turquoise}
            handler={handleAddTask}
          />
        </StyledInputGroup>
      </StyledTaskHeader>
      <StyledTaskList>
        <ul>{renderTasks()}</ul>
      </StyledTaskList>
    </StyledTasksContainer>
  );
};

export default Tasks;
