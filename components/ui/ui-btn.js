import { StyledBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon, outline, btnLg }) => {
  return (
    <StyledBtn
      onClick={() => handler()}
      color={color}
      outline={outline}
      btnLg={btnLg}
    >
      {icon}
    </StyledBtn>
  );
};

export default UIBtn;
