import { getSession } from 'next-auth/react';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import MyEditor from '../../components/editor/tiptap';
import { User } from '../../models/user';
import connectDB, { serializeData } from '../../helpers/db.js';

const Projects = ({ projects }) => {
  return (
    <>
      <Layout>
        <SidebarTray heading="Projects" route="projects" projects={projects} />
        <MyEditor />
      </Layout>
    </>
  );
};

export default Projects;

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

  const db = await connectDB();
  const user = await User.findOne({ email });

  db.disconnect();

  return { props: { projects: serializeData(user.projects) } };
}
