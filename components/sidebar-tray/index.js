import { fetchContext } from '../../helpers';
import { StyledTray, StyledTrayHeader, StyledBtnGroup } from './tray.styles';
import SidebarBtn from './sidebar-btn';
import { MdAdd } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { theme } from '../../pages/_app';

const SidebarTray = () => {
  const { toggleTrayOpenState, trayOpenState } = fetchContext();

  const variants = {
    closed: {
      left: '-17%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      left: '8%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <StyledTray variants={variants} initial="closed" animate={trayOpenState}>
      <StyledTrayHeader>
        <h2>Projects</h2>
        <StyledBtnGroup>
          <SidebarBtn icon={<MdAdd />} color={theme.colors.turquoise} />
          <SidebarBtn icon={<MdDelete />} color={theme.colors.bittersweet} />
        </StyledBtnGroup>
      </StyledTrayHeader>
    </StyledTray>
  );
};

export default SidebarTray;
