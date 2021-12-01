import { StyledTaskTile } from './tasks.styles';

const TaskTile = () => {
  return (
    <StyledTaskTile>
      <label htmlFor="task"></label>
      <input
        type="checkbox"
        name="task"
        id="task"
        onChange={(e) => console.log(e.target.checked)}
      />
    </StyledTaskTile>
  );
};

export default TaskTile;
