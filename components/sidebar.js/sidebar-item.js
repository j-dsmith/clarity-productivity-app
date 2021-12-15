import Link from 'next/link';
import { StyledIcon } from './sidebar.styles';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import AnimationContext from '../../store/animation-ctx';

const SidebarItem = ({ title, icon, color, href }) => {
  const animationCtx = useContext(AnimationContext);
  const { trayOpen, toggleTrayOpen } = animationCtx;

  const router = useRouter();

  const handleTrayState = (path) => {
    if (path.includes('projects')) {
      toggleTrayOpen(true);

      return;
    }
    toggleTrayOpen(false);
  };

  // const toggleTray = (title) => {
  //   if (title === 'Projects') {
  //     toggleTrayOpenState();
  //   } else if (title !== 'Projects' && trayOpenState === 'open') {
  //     toggleTrayOpenState();
  //   }
  // };

  const handleClick = (title) => {
    toggleTray(title);
  };

  return (
    <Link href={href}>
      <StyledIcon
        color={color}
        onClick={() => handleTrayState(router.pathname)}
      >
        {icon}
      </StyledIcon>
    </Link>
  );
};

export default SidebarItem;
