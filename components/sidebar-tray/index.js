import { useContext } from 'react';
import AnimationContext from '../../store/animation-ctx';
import { useCycle } from 'framer-motion';
import { StyledTray } from './tray.styles';

const SidebarTray = () => {
  const animationCtx = useContext(AnimationContext);
  const { trayOpenState, toggleTrayOpenState } = animationCtx;
  console.log(animationCtx);

  const variants = {
    closed: {
      left: '-17%',
      transition: {
        type: 'linear',
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    open: {
      left: '8%',
      transition: {
        type: 'linear',
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <StyledTray variants={variants} initial="closed" animate={trayOpenState}>
      <button
        onClick={() => toggleTrayOpenState()}
        style={{ position: 'fixed', right: '50%', top: '50%' }}
      >
        toggle tray
      </button>
    </StyledTray>
  );
};

export default SidebarTray;
