import axios from 'axios';

export const addProject = async (projectTitle) => {
  const response = await axios.post('/api/projects', {
    projectTitle,
  });

  return response;
};

export const deleteProject = async (projectId) => {
  const response = await axios.delete(`/api/projects/${projectId}`);
  console.log(response);
  return response;
};

export const fetchProjects = async () => {
  const response = await axios.get('/api/projects');
  return response;
};
