import { useState } from 'react';
import { useRouter } from 'next/router';
import { theme } from '../../../pages/_app';
import { MdAdd, MdDelete } from 'react-icons/md';
import { TasksContainer, TaskList, TaskHeader } from './tasks.styles';
import { InputGroup, TextInput } from '../../ui/ui-items.styles';
import UIBtn from '../../ui/ui-btn';
import { addTask, deleteTask } from '../../../helpers/tasks';
import { refreshData } from '../../../helpers/client';
import TaskTile from './task-tile';

const Tasks = ({ user: { tasks } }) => {
  // State Initialization for new task input and active delete state
  const [taskTitle, setTaskTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  const router = useRouter();

  const renderTasks = () => {
    // Return a task tile with populated data from DB
    return tasks.map((task) => (
      <li key={task._id}>
        <TaskTile
          id={task._id}
          content={task.content}
          dueDate={task.dueDate}
          deleteActive={deleteActive}
          handler={deleteActive ? handleDeleteTask : handleCompleteTask}
        />
      </li>
    ));
  };

  const handleAddTask = async () => {
    // Reset input
    setTaskTitle('');
    // Run add task helper to send POST request to /api/tasks
    const response = await addTask(taskTitle);
    refreshData(router);
  };

  const handleDeleteTask = async (id) => {
    // Run delete task helper to send DELETE request to /api/tasks/[taskId]
    const response = await deleteTask(id);
    refreshData(router);
  };

  const handleCompleteTask = async () => {};

  const toggleDeleteActive = () => {
    setDeleteActive(!deleteActive);
  };

  return (
    <TasksContainer>
      <TaskHeader>
        <h2>Tasks</h2>
        <InputGroup width="80%">
          <TextInput
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
          <UIBtn
            icon={<MdAdd />}
            color={theme.colors.turquoise}
            outline={true}
            handler={handleAddTask}
          />
          <UIBtn
            icon={<MdDelete />}
            color={theme.colors.bittersweet}
            handler={toggleDeleteActive}
            outline={deleteActive ? false : true}
          />
        </InputGroup>
      </TaskHeader>
      <TaskList>
        <ul>{renderTasks()}</ul>
      </TaskList>
    </TasksContainer>
  );
};

export default Tasks;
