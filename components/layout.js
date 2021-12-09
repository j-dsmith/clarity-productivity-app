import styled from 'styled-components';
import Sidebar from './sidebar.js';

const LayoutContainer = styled.section`
  min-height: 100vh;
  width: 92%;
  position: relative;
  top: 0;
  left: 8%;
  z-index: 0;
  background-color: ${({ theme }) => theme.colors.gray600};

  main {
    height: 100%;
    width: 100%;
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
