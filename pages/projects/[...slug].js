import connectDB from '../../helpers/db';
import { User } from '../../models/user';
import { getSession } from 'next-auth/react';
import { serializeData } from '../../helpers/db';
import MyEditor from '../../components/editor/tiptap';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';

const NotePage = ({
  currentProjectTitle,
  currentProjectId,
  notes,
  selectedNote,
}) => {
  return (
    <Layout>
      <SidebarTray
        heading={currentProjectTitle}
        currentProjectId={currentProjectId}
        route="notes"
        notes={notes}
        trayFixed={true}
      />
      <MyEditor currentProjectId={currentProjectId} note={selectedNote} />
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
  const [currentProjectId, , noteId] = slug;

  const db = await connectDB();
  const user = await User.findOne({ email });
  const currentNotes = user.projects.filter(
    ({ _id }) => _id == currentProjectId
  )[0].notes;
  const selectedNote = currentNotes.filter(({ _id }) => _id == noteId)[0];

  db.disconnect();

  return {
    props: {
      currentProjectTitle: user.projects.filter(
        ({ _id }) => _id == currentProjectId
      )[0].title,
      currentProjectId,
      notes: serializeData(currentNotes),
      selectedNote: serializeData(selectedNote),
    },
  };
}
