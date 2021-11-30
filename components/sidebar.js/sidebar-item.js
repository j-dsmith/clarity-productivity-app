import { fetchContext } from '../../helpers/index';
import { StyledIcon } from './sidebar.styles';

const SidebarItem = ({ title, icon, color }) => {
  const { trayOpenState, toggleTrayOpenState } = fetchContext();

  const toggleTray = (title) => {
    if (title === 'Projects') {
      toggleTrayOpenState();
    } else if (title !== 'Projects' && trayOpenState === 'open') {
      toggleTrayOpenState();
    }
  };

  const handleClick = (title) => {
    toggleTray(title);
  };

  return (
    <StyledIcon
      whileHover="hover"
      color={color}
      onClick={() => handleClick(title)}
    >
      {icon}
    </StyledIcon>
  );
};

export default SidebarItem;
