import { StyledBtn } from './ui-items.styles';

const UIBtn = ({ type, color, icon }) => {
  return <StyledBtn color={color}>{icon}</StyledBtn>;
};

export default UIBtn;
