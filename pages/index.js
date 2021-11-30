import SidebarTray from '../components/sidebar-tray/index.js';
import Sidebar from '../components/sidebar.js/index.js';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Dashboard() {
  return (
    <>
      <Sidebar />
      <SidebarTray />
    </>
  );
}
