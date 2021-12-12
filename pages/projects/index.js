import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { fetchContext } from '../../helpers/client';
import { fetchProtectedUser } from '../../helpers/db.js';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import MyEditor from '../../components/editor/tiptap';

const Projects = () => {
  const { data: session } = useSession();
  const { setUser } = fetchContext('user');

  useEffect(() => {
    if (session) {
      (async () => {
        const fetchedUser = await fetchProtectedUser();
        setUser(fetchedUser);
      })();
    }
  }, [session]);

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
