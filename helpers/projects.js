import axios from 'axios';
import useSWR from 'swr';

export const addProject = async (projectTitle) => {
  const response = await axios.post('/api/projects', {
    projectTitle,
  });

  return response;
};

export const deleteProject = async (projectId) => {
  const response = await axios.delete(`/api/projects/${projectId}`);

  return response;
};
