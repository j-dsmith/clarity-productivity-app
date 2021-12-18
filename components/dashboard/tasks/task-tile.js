// Dependencies
import { useState } from 'react';
import { useSWRConfig } from 'swr';

// Style
import {
  MdCancel,
  MdCheckCircle,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';
import { StyledTaskTile, CheckboxGroup, CheckboxLabel } from './tasks.styles';

//Helpers
import { completeTask } from '../../../helpers/tasks';

const TaskTile = ({ content, deleteActive, handler, id }) => {
  // Init checked state for task completion
  const [checked, setChecked] = useState(false);

  // Get mutate function from SWR to update refresh tasks after completing a note
  const { mutate } = useSWRConfig();

  const handleChecked = async (e, taskId) => {
    setChecked(e.target.checked);
    const response = await completeTask(taskId);
    mutate('/api/user');
  };

  return (
    <StyledTaskTile
      deleteactive={deleteActive ? 'true' : 'false'}
      onClick={() => handler(id)}
    >
      {deleteActive ? (
        <CheckboxGroup>
          <MdCancel />
        </CheckboxGroup>
      ) : (
        <CheckboxGroup>
          <CheckboxLabel htmlFor="task" ischecked={checked}>
            {!checked ? (
              <MdOutlineRadioButtonUnchecked />
            ) : (
              <>
                <div id="checkmark-white-bg" />
                <MdCheckCircle />
              </>
            )}
          </CheckboxLabel>
          <input
            type="checkbox"
            name="task"
            id="task"
            onChange={(e) => handleChecked(e, id)}
          />
        </CheckboxGroup>
      )}

      <p>{content}</p>
    </StyledTaskTile>
  );
};

export default TaskTile;
