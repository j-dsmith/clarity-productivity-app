import { StyledSaveBtn } from './ui-items.styles';
import { MdSaveAlt } from 'react-icons/md';

const SaveNoteBtn = ({ handler }) => {
  return (
    <StyledSaveBtn onClick={() => handler()}>
      <MdSaveAlt />
    </StyledSaveBtn>
  );
};

export default SaveNoteBtn;
