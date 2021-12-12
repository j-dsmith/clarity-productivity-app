import { useEffect } from 'react';
import { useSession, getSession } from 'next-auth/react';
import Layout from '../../components/layout';
import SidebarTray from '../../components/sidebar-tray';
import MyEditor from '../../components/editor/tiptap';
import { fetchContext } from '../../helpers/client';
import connectDB, { fetchProtectedUser } from '../../helpers/db';
import { User } from '../../models/user';

const ProjectPage = ({ currentProjectTitle, currentProjectId }) => {
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
    <>
      <Layout>
        <SidebarTray
          heading={currentProjectTitle}
          route="notes"
          currentProjectId={currentProjectId}
        />
        <MyEditor />
      </Layout>
    </>
  );
};

export default ProjectPage;

export async function getServerSideProps({ req, params }) {
  const session = await getSession({ req });
  const {
    user: { email },
  } = session;
  const { projectId } = params;

  const db = await connectDB();
  const user = await User.findOne({ email });
  const currentProjectTitle = user.projects.filter(
    ({ _id }) => _id == projectId
  )[0].title;
  db.disconnect();

  return {
    props: { currentProjectTitle, currentProjectId: projectId },
  };
}
