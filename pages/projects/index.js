import useSWR from 'swr';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import { fetchData } from '../../helpers/client';
import SelectProjectBanner from '../../components/ui/select-project-banner';

const Projects = ({}) => {
  let projects;
  const { data, error } = useSWR('/api/projects', fetchData);
  if (data) {
    projects = [...data.data];
  }

  return (
    <>
      <Layout>
        <SidebarTray heading="Projects" route="projects" projects={projects} />
        <SelectProjectBanner />
      </Layout>
    </>
  );
};

export default Projects;
