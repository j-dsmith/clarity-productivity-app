import { StyledSidebar, SidebarItemList } from './sidebar.styles';
import SidebarItem from './sidebar-item';
import { data } from './sidebar-data';
import LogoutBtn from './logout-btn';

const Sidebar = () => {
  const renderSidebarItems = () => {
    return data.map((item) => (
      <SidebarItem
        key={item.title}
        title={item.title}
        icon={item.icon}
        color={item.color}
        href={item.href}
      />
    ));
  };

  return (
    <StyledSidebar>
      <SidebarItemList>
        {renderSidebarItems()}
        <LogoutBtn />
      </SidebarItemList>
    </StyledSidebar>
  );
};

export default Sidebar;
