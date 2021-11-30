import { StyledIcon } from './sidebar.styles';
const SidebarItem = ({ icon, color }) => {
  return (
    <StyledIcon whileHover="hover" color={color}>
      {icon}
    </StyledIcon>
  );
};

export default SidebarItem;
