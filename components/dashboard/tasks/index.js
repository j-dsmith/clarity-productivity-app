import { useContext, useState } from 'react';
import UserContext from '../../../store/user-ctx';
import { TasksContainer, TaskList, TaskHeader } from './tasks.styles';
import { InputGroup, TextInput } from '../../ui/ui-items.styles';
import { theme } from '../../../pages/_app';
import { MdAdd, MdDelete } from 'react-icons/md';
import TaskTile from './task-tile';
import UIBtn from '../../ui/ui-btn';
import { addTask, deleteTask, fetchTasks } from '../../../helpers/tasks';

const Tasks = () => {
  // State Initialization for new task input and active delete state
  const [taskTitle, setTaskTitle] = useState('');
  const [deleteActive, setDeleteActive] = useState(false);
  // const [taskToDelete, setTaskToDelete] = useState('');
  // Fetch the loaded user stored in context and destructure tasks array
  const { user, setUser } = useContext(UserContext);
  const { tasks } = user;

  const renderTasks = () => {
    // Check if user is undefined -> conditional check to prevent error
    // while user is being fetched from context on page load
    if (user.tasks !== undefined) {
      // Return a task tile with populated data from DB
      return tasks.map((task) => (
        <li>
          <TaskTile
            key={task._id}
            id={task._id}
            content={task.content}
            dueDate={task.dueDate}
            deleteActive={deleteActive}
            handler={deleteActive ? handleDeleteTask : handleCompleteTask}
          />
        </li>
      ));
    }
    // If user is undefined, return nothing -> prevents error while fetching user
    return null;
  };

  const handleAddTask = async () => {
    // Reset input
    setTaskTitle('');
    // Run add task helper to send POST request to /api/tasks
    const response = await addTask(taskTitle);
    // Re-fetch tasks to update list
    await handleFetchTasks();
  };

  const handleDeleteTask = async (id) => {
    //Run delete task helper to send DELETE request to /api/tasks/[taskId]
    const response = await deleteTask(id);
    // Re-fetch tasks to update list
    await handleFetchTasks();
  };

  const handleFetchTasks = async () => {
    // Run fetch helper to get updated tasks list from DB
    const response = await fetchTasks();
    const { tasks } = response.data;
    // Set the tasks for current user to updated task list to trigger rerender of list
    setUser({ ...user, tasks });
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
            btnLg
          />
          <UIBtn
            icon={<MdDelete />}
            color={theme.colors.bittersweet}
            handler={toggleDeleteActive}
            outline={deleteActive ? false : true}
            btnLg
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
