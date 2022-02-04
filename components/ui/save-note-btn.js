// Style
import { StyledSaveBtn } from './ui-items.styles';
import { SpinnerContainer } from './ui-items.styles';
import { MdSave } from 'react-icons/md';

// Components
import Loader from 'react-loader-spinner';

const SaveNoteBtn = ({ handler, saving }) => {
  return (
    <StyledSaveBtn onClick={() => handler()} saving={saving}>
      {saving ? (
        <SpinnerContainer>
          <Loader type="Oval" color="#fff" height={16} width={16} />
        </SpinnerContainer>
      ) : (
        <MdSave />
      )}
    </StyledSaveBtn>
  );
};

export default SaveNoteBtn;
