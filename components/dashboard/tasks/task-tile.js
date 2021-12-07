import { StyledTaskTile } from './tasks.styles';

const TaskTile = ({ content, dueDate }) => {
  return (
    <StyledTaskTile>
      <label htmlFor="task"></label>
      <input
        type="checkbox"
        name="task"
        id="task"
        onChange={(e) => console.log(e.target.checked)}
      />
      <p>{content}</p>

      <p className="date">{dueDate}</p>
    </StyledTaskTile>
  );
};

export default TaskTile;
