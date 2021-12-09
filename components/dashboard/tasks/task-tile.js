import { MdCancel } from 'react-icons/md';
import { StyledTaskTile } from './tasks.styles';

const TaskTile = ({ content, deleteActive, handler, id }) => {
  return (
    <StyledTaskTile
      deleteactive={deleteActive ? 'true' : 'false'}
      onClick={() => handler(id)}
    >
      {deleteActive ? (
        <MdCancel />
      ) : (
        <>
          <label htmlFor="task"></label>
          <input
            type="checkbox"
            name="task"
            id="task"
            onChange={(e) => console.log(e.target.checked)}
          />
        </>
      )}

      <p>{content}</p>
    </StyledTaskTile>
  );
};

export default TaskTile;
