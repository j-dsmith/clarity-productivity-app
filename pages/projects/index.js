import { useEffect } from 'react';
import useSWR from 'swr';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import { fetchContext, fetchData } from '../../helpers/client';
import SelectProjectBanner from '../../components/ui/select-project-banner';
import ProjectsList from '../../components/sidebar-tray/projects-list';

const Projects = () => {
  const { trayOpen } = fetchContext('animation');
  const { setUser } = fetchContext('user');

  const { data: fetchedUser, error } = useSWR('/api/user', fetchData);

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser.data);
    }
  }, [fetchedUser]);

  return (
    <>
      <Layout>
        <SidebarTray heading="Projects" route="projects" trayFixed={trayOpen}>
          <ProjectsList />
        </SidebarTray>
        <SelectProjectBanner />
      </Layout>
    </>
  );
};

export default Projects;
