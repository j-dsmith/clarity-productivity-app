import { getSession } from 'next-auth/react';
import useSWR from 'swr';
import { fetchData } from '../../helpers/client';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';

const ProjectPage = ({ currentProjectId }) => {
  const { data, error } = useSWR(
    `/api/projects/${currentProjectId}`,
    fetchData
  );

  const selectedProject = data ? data.selectedProject : null;

  return (
    <>
      <Layout>
        <SidebarTray
          heading={selectedProject ? selectedProject.title : ''}
          currentProjectId={currentProjectId}
          route="notes"
          selectedProject={selectedProject}
          trayFixed={true}
        />
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
