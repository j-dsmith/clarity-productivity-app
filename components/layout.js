import styled from 'styled-components';
import { motion } from 'framer-motion';
import Sidebar from './sidebar.js';
import SidebarTray from './sidebar-tray';
import { fetchContext } from '../helpers/index.js';

const StyledLayoutContainer = styled.section`
  height: 100%;
  min-height: 100%;
  width: 92%;
  position: fixed;
  top: 0;
  left: 8%;
  z-index: 0;

  main {
    height: 100%;
    width: 100%;
  }
`;

const StyledBackdropFilter = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.25rem);
  z-index: 1;
`;

const Layout = ({ children }) => {
  const { trayOpenState } = fetchContext();

  const variants = {
    closed: {
      opacity: 0,
      visibility: 'hidden',
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      transition: {
        type: 'linear',
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <Sidebar />
      <SidebarTray />
      <StyledLayoutContainer>
        <main>{children}</main>
        {/* <StyledBackdropFilter
          variants={variants}
          initial="closed"
          animate={trayOpenState}
        /> */}
      </StyledLayoutContainer>
    </>
  );
};

export default Layout;
