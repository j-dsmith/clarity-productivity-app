import axios from 'axios';

export const addNote = async (title, projectId) => {
  const response = await axios.post(`/api/projects/${projectId}/notes`, {
    title,
  });

  return response;
};
