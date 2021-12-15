import { useContext } from 'react';
import useSWR from 'swr';

import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import { fetchData } from '../../helpers/client';
import SelectProjectBanner from '../../components/ui/select-project-banner';
import AnimationContext from '../../store/animation-ctx';

const Projects = () => {
  const animationCtx = useContext(AnimationContext);
  const { trayOpen } = animationCtx;

  let projects;
  const { data, error } = useSWR('/api/projects', fetchData);
  if (data) {
    projects = [...data.data];
  }

  return (
    <>
      <Layout>
        <SidebarTray
          heading="Projects"
          route="projects"
          projects={projects}
          trayFixed={trayOpen}
        />
        <SelectProjectBanner />
      </Layout>
    </>
  );
};

export default Projects;

export async function getServerSideProps(context) {
  console.log(context.req.headers.referer);

  return { props: {} };
}
