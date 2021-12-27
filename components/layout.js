// Dependencies
import styled from 'styled-components';

// Components
import Sidebar from './sidebar.js';

const LayoutContainer = styled.section`
  min-height: 100vh;
  height: 100vh;
  width: max(92vw, calc(100vw - 8rem));
  position: relative;
  top: 0;
  left: min(8vw, 8rem);
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.gray600};
  display: flex;

  main {
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <LayoutContainer>
        <main>{children}</main>
      </LayoutContainer>
    </>
  );
};

export default Layout;
