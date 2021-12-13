import { getSession } from 'next-auth/react';
import Layout from '../../components/layout';
import SidebarTray from '../../components/sidebar-tray';
import MyEditor from '../../components/editor/tiptap';

import connectDB, { serializeData } from '../../helpers/db';
import { User } from '../../models/user';

const ProjectPage = ({ currentProjectTitle, notes, currentProjectId }) => {
  return (
    <>
      <Layout>
        <SidebarTray
          heading={currentProjectTitle}
          currentProjectId={currentProjectId}
          route="notes"
          notes={notes}
          trayFixed={true}
        />
        <MyEditor />
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

  const {
    user: { email },
  } = session;
  const { projectId } = params;

  const db = await connectDB();
  const user = await User.findOne({ email });
  const currentNotes = user.projects.filter(({ _id }) => _id == projectId)[0]
    .notes;
  db.disconnect();

  return {
    props: {
      currentProjectTitle: user.projects.filter(
        ({ _id }) => _id == projectId
      )[0].title,
      currentProjectId: projectId,
      notes: serializeData(currentNotes),
    },
  };
}
