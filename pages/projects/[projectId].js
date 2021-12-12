import Layout from '../../components/layout';
import SidebarTray from '../../components/sidebar-tray';
import MyEditor from '../../components/editor/tiptap';

const ProjectPage = () => {
  return (
    <>
      <Layout>
        <SidebarTray staticTray={true} />
        <MyEditor />
      </Layout>
    </>
  );
};

export default ProjectPage;
