import { fetchContext } from '../../helpers';
import SidebarTray from '../../components/sidebar-tray';

import Tiptap from '../../components/editor/tiptap';

const Projects = () => {
  const { trayOpenState, toggleTrayOpenState } = fetchContext();

  return (
    // Set Container for editor w/ toolbar and a header componenent, editable through local state
    <>
      <SidebarTray />
      <Tiptap />
    </>
  );
};

export default Projects;
