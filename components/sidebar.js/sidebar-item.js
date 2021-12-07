import Link from 'next/link';
import { fetchContext } from '../../helpers/index';
import { StyledIcon } from './sidebar.styles';

const SidebarItem = ({ title, icon, color, href }) => {
  const { trayOpenState, toggleTrayOpenState } = fetchContext('animation');

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
    <Link href={href}>
      <StyledIcon color={color} onClick={() => handleClick(title)}>
        {icon}
      </StyledIcon>
    </Link>
  );
};

export default SidebarItem;
