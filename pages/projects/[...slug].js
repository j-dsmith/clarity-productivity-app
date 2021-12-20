// Dependencies
import { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import useSWR from 'swr';

// Style
import Layout from '../../components/layout';

// Helpers
import { fetchData, fetchContext } from '../../helpers/client';

// Components
import MyEditor from '../../components/editor/my-editor';
import SidebarTray from '../../components/sidebar-tray';
import NotesList from '../../components/sidebar-tray/notes-list';

const NotePage = ({ currentProjectId, currentNoteId }) => {
  const { data: fetchedUser, error } = useSWR('/api/user', fetchData);

  const { setUser } = fetchContext('user');

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser.data);
    }
  }, [fetchedUser]);

  return (
    <Layout>
      <SidebarTray route="notes" trayFixed={true}>
        <NotesList currentProjectId={currentProjectId} />
      </SidebarTray>
      <MyEditor
        currentProjectId={currentProjectId}
        currentNoteId={currentNoteId}
      />
    </Layout>
  );
};

export default NotePage;
export async function getServerSideProps({ req, params: { slug } }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  const {
    user: { email },
  } = session;
  const [currentProjectId, , currentNoteId] = slug;

  return {
    props: {
      currentProjectId,
      currentNoteId,
      session,
    },
  };
}
