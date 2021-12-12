import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { fetchContext } from '../../helpers/client';
import { fetchProtectedUser } from '../../helpers/db.js';
import SidebarTray from '../../components/sidebar-tray';
import ProjectsList from '../../components/sidebar-tray/projects-list';
import Layout from '../../components/layout';
import MyEditor from '../../components/editor/tiptap';

const Projects = () => {
  const { data: session } = useSession();
  const { user, setUser } = fetchContext('user');

  useEffect(() => {
    if (session) {
      (async () => {
        const fetchedUser = await fetchProtectedUser();
        setUser(fetchedUser);
      })();
    }
  }, [session]);

  return (
    <>
      <Layout>
        <SidebarTray heading="Projects" route="projects" />
        <MyEditor />
      </Layout>
    </>
  );
};

export default Projects;
