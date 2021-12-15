import axios from 'axios';

export const addNote = async (title, projectId) => {
  const response = await axios.post(`/api/projects/${projectId}/notes`, {
    title,
  });

  return response;
};

export const deleteNote = async (projectId, noteId) => {
  const response = await axios.delete(
    `/api/projects/${projectId}/notes/${noteId}`
  );
  return response;
};

export const updateNote = async (projectId, noteId, currentContent) => {
  const response = await axios.put(
    `/api/projects/${projectId}/notes/${noteId}`,
    currentContent
  );
  return response;
};
