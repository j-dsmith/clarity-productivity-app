// Style
import { StyledUIBtn } from './ui-items.styles';

const UIBtn = ({ handler, color, icon, outline, disabled, className }) => {
  return (
    <StyledUIBtn
      className={`${className}`}
      style={{ '--color': color }}
      onClick={() => handler()}
      outline={outline}
      disabled={disabled}
    >
      {icon}
    </StyledUIBtn>
  );
};

export default UIBtn;
