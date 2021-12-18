// Dependencies
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

// Style
import Layout from '../../components/layout';

// Helpers
import { fetchContext, fetchData } from '../../helpers/client';

// Components
import SidebarTray from '../../components/sidebar-tray';
import NotesList from '../../components/sidebar-tray/notes-list';

const ProjectPage = ({ currentProjectId }) => {
  const { data: fetchedUser, error } = useSWR('/api/user', fetchData);

  const { setUser } = fetchContext('user');
  const { trayOpen } = fetchContext('animation');

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser.data);
    }
  }, [fetchedUser]);

  return (
    <>
      <Layout>
        <SidebarTray
          currentProjectId={currentProjectId}
          route="notes"
          trayFixed={trayOpen}
        >
          <NotesList currentProjectId={currentProjectId} />
        </SidebarTray>
      </Layout>
    </>
  );
};

export default ProjectPage;

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const { projectId } = params;

  return {
    props: {
      currentProjectId: projectId,
      session,
    },
  };
}
