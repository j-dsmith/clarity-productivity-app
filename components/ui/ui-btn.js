import { StyledBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon, outline }) => {
  return (
    <StyledBtn onClick={() => handler()} color={color} outline={outline}>
      {icon}
    </StyledBtn>
  );
};

export default UIBtn;
