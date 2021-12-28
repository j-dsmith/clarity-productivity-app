import axios from 'axios';

export const incrementPomodoroCycles = async () => {
  const response = await axios.put('/api/pomodoro');
  console.log(response);
  return response;
};
