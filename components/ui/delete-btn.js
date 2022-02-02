// Style
import { StyledDeleteBtn } from './ui-items.styles';
import { MdDelete } from 'react-icons/md';

const DeleteBtn = ({ deleteActive, handler }) => {
  return (
    <StyledDeleteBtn
      className={`${deleteActive ? 'active' : ''}`}
      onClick={handler}
      style={{
        '--color': deleteActive ? 'hsl(0,100%, 71%)' : 'hsl(0, 0%, 60%)',
      }}
    >
      <MdDelete />
    </StyledDeleteBtn>
  );
};

export default DeleteBtn;
