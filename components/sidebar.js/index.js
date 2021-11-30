import { StyledSidebar, SidebarItemList } from './sidebar.styles';
import SidebarItem from './sidebar-item';
import { data } from './sidebar-data';

const Sidebar = () => {
  const renderSidebarItems = () => {
    return data.map((item) => (
      <SidebarItem key={item.title} icon={item.icon} color={item.color} />
    ));
  };

  return (
    <StyledSidebar>
      <SidebarItemList>{renderSidebarItems()}</SidebarItemList>
    </StyledSidebar>
  );
};

export default Sidebar;
