import axios from 'axios';

export const addTask = async (text) => {
  const response = await axios.post('/api/tasks', {
    text,
  });

  return response;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`/api/tasks/${taskId}`);

  return response;
};
