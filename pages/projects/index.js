import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import MyEditor from '../../components/editor/tiptap';

const Projects = () => {
  return (
    // Set Container for editor w/ toolbar and a header componenent, editable through local state
    <>
      <Layout>
        <SidebarTray />
        <MyEditor />
      </Layout>
    </>
  );
};

export default Projects;
