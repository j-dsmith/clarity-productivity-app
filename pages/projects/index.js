import useSWR from 'swr';
import { getSession } from 'next-auth/react';
import SidebarTray from '../../components/sidebar-tray';
import Layout from '../../components/layout';
import MyEditor from '../../components/editor/tiptap';
// import { User } from '../../models/user';
import connectDB, { serializeData } from '../../helpers/db.js';
import { fetchData } from '../../helpers/client';
import axios from 'axios';

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
        <MyEditor />
      </Layout>
    </>
  );
};

export default Projects;
