import { StyledSaveBtn } from './ui-items.styles';
import { MdSaveAlt } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import { SpinnerContainer } from './ui-items.styles';

const SaveNoteBtn = ({ handler, saving }) => {
  return (
    <StyledSaveBtn onClick={() => handler()} saving={saving}>
      {saving ? (
        <SpinnerContainer>
          <Loader type="Oval" color="#fff" height={25} width={25} />
        </SpinnerContainer>
      ) : (
        <MdSaveAlt />
      )}
    </StyledSaveBtn>
  );
};

export default SaveNoteBtn;
