import { useState } from 'react';
import { useSWRConfig } from 'swr';
import {
  MdCancel,
  MdCheckCircle,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';
import { StyledTaskTile, CheckboxGroup, CheckboxLabel } from './tasks.styles';
import { completeTask } from '../../../helpers/tasks';

const TaskTile = ({ content, deleteActive, handleDeleteTask, id }) => {
  const [checked, setChecked] = useState(false);

  const { mutate } = useSWRConfig();

  const handleChecked = async (e, taskId) => {
    setChecked(e.target.checked);
    const response = await completeTask(taskId);
    mutate('/api/user');
  };

  if (deleteActive) {
    return (
      <StyledTaskTile deleteactive="true" onClick={() => handleDeleteTask(id)}>
        <CheckboxGroup>
          <MdCancel className="delete-icon" />
        </CheckboxGroup>

        <p>{content}</p>
      </StyledTaskTile>
    );
  }
  return (
    <StyledTaskTile deleteactive="false">
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

      <p>{content}</p>
    </StyledTaskTile>
  );
};

export default TaskTile;
