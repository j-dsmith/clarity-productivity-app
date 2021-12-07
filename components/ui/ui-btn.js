import { StyledBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon }) => {
  return (
    <StyledBtn onClick={() => handler} color={color}>
      {icon}
    </StyledBtn>
  );
};

export default UIBtn;
