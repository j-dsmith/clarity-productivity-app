// Dependencies
import { data } from './sidebar-data';

// Style
import { StyledSidebar, SidebarItemList } from './sidebar.styles';

// Components
import SidebarItem from './sidebar-item';
import LogoutBtn from './logout-btn';

const Sidebar = () => {
  const renderSidebarItems = () => {
    return data.map((item) => (
      <SidebarItem
        key={item.title}
        title={item.title}
        icon={item.icon}
        color="hsl(222, 100%, 61%)"
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
