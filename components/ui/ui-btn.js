// Style
import { StyledUIBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon, outline, btnLg, disabled }) => {
  return (
    <StyledUIBtn
      onClick={() => handler()}
      color={color}
      outline={outline}
      btnLg={btnLg}
      disabled={disabled}
    >
      {icon}
    </StyledUIBtn>
  );
};

export default UIBtn;
