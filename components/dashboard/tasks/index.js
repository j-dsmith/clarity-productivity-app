// Dependencies
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSWRConfig } from 'swr';

// Helpers
import { addTask, deleteTask } from '../../../helpers/tasks';
import { fetchContext } from '../../../helpers/client';

// Style
import { theme } from '../../../pages/_app';
import { MdAdd, MdOutlineCancel, MdDelete } from 'react-icons/md';
import { TasksContainer, TaskList, TaskHeader } from './tasks.styles';
import {
  InputGroup,
  SpinnerContainer,
  TextInput,
} from '../../ui/ui-items.styles';

// Components
import UIBtn from '../../ui/ui-btn';
import TaskTile from './task-tile';
import Loader from 'react-loader-spinner';
import DeleteBtn from '../../ui/delete-btn';

const Tasks = () => {
  // State Initialization for new task input and active delete state
  const [taskTitle, setTaskTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);

  const { mutate } = useSWRConfig();

  // Get user from context
  const { user } = fetchContext('user');

  // Check if user is empty object or if loaded successfully
  if (Object.keys(user).length === 0) {
    return (
      <TasksContainer>
        <TaskHeader>
          <h2>Tasks</h2>
        </TaskHeader>

        <SpinnerContainer>
          <Loader type="Oval" color="hsl(0, 0%, 60%)" height={75} width={75} />
        </SpinnerContainer>
      </TasksContainer>
    );
  }

  const { tasks } = user;

  const renderTasks = () => {
    // Return a task tile with populated data from DB
    return tasks.map((task) => (
      <motion.li
        key={task._id}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <TaskTile
          id={task._id}
          content={task.content}
          dueDate={task.dueDate}
          deleteActive={deleteActive}
          handleDeleteTask={handleDeleteTask}
        />
      </motion.li>
    ));
  };

  const handleAddTask = async () => {
    // Reset input
    setTaskTitle('');
    // Run add task helper to send POST request to /api/tasks
    const response = await addTask(taskTitle);
    mutate('/api/user');
  };

  const handleDeleteTask = async (id) => {
    // Run delete task helper to send DELETE request to /api/tasks/[taskId]
    const response = await deleteTask(id);
    mutate('/api/user');
  };

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
            placeholder={deleteActive ? '' : 'Task Title'}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            disabled={deleteActive}
          />
          <UIBtn
            icon={!taskTitle || deleteActive ? <MdOutlineCancel /> : <MdAdd />}
            color="var(--color-blue)"
            handler={tasks && handleAddTask}
            disabled={!taskTitle || deleteActive ? true : false}
          />
          <DeleteBtn
            deleteActive={deleteActive}
            handler={tasks && toggleDeleteActive}
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
