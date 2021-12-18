//Style
import { TrayContainer } from './tray.styles';

const SidebarTray = ({ trayFixed, children }) => {
  // Framer-motion variant
  const tray = {
    closed: {
      left: '-30%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      left: '0%',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <TrayContainer
      variants={tray}
      initial={trayFixed ? 'open' : 'closed'}
      animate="open"
    >
      {children}
    </TrayContainer>
  );
};

export default SidebarTray;
