import { StyledBtn } from './tray.styles';

const SidebarBtn = ({ type, color, icon }) => {
  return <StyledBtn color={color}>{icon}</StyledBtn>;
};

export default SidebarBtn;
