import { MdCancel } from 'react-icons/md';
import { StyledTaskTile } from './tasks.styles';

const TaskTile = ({ content, deleteActive, handler, id }) => {
  const li = {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1, type: 'linear', ease: 'easeInOut' },
    },
  };

  return (
    <StyledTaskTile
      deleteactive={deleteActive ? 'true' : 'false'}
      onClick={() => handler(id)}
      initial="initial"
      animate="animate"
      variants={li}
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
