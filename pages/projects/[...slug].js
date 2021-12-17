import { getSession } from 'next-auth/react';
import MyEditor from '../../components/editor';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import useSWR from 'swr';
import { fetchData } from '../../helpers/client';

const NotePage = ({ currentProjectId, noteId }) => {
  const { data: projectData, error: projectError } = useSWR(
    `/api/projects/${currentProjectId}`,
    fetchData
  );

  const selectedProject = projectData ? projectData.selectedProject : null;

  const { data: noteData, error: noteError } = useSWR(
    `/api/projects/${currentProjectId}/notes/${noteId}`,
    fetchData
  );

  const note = noteData ? noteData.selectedNote : null;

  return (
    <Layout>
      <SidebarTray
        heading={selectedProject ? selectedProject.title : ''}
        currentProjectId={currentProjectId}
        route="notes"
        selectedProject={selectedProject}
        trayFixed={true}
      />
      <MyEditor currentProjectId={currentProjectId} note={note} />
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

  const [currentProjectId, , noteId] = slug;

  return {
    props: {
      currentProjectId,
      noteId,
      session,
    },
  };
}
