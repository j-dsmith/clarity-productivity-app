import { StyledUIBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon, outline, btnLg }) => {
  return (
    <StyledUIBtn
      onClick={() => handler()}
      color={color}
      outline={outline}
      btnLg={btnLg}
    >
      {icon}
    </StyledUIBtn>
  );
};

export default UIBtn;
