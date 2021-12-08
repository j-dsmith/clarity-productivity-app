import styled from 'styled-components';
import Sidebar from './sidebar.js';

const StyledLayoutContainer = styled.section`
  height: 100%;
  min-height: 100%;
  width: 92%;
  position: fixed;
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
      <StyledLayoutContainer>
        <main>{children}</main>
      </StyledLayoutContainer>
    </>
  );
};

export default Layout;
