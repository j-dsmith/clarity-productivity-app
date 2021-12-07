import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import connectDB from '../helpers/db.js';
import { User } from '../models/user';
import Layout from '../components/layout.js';
import { fetchContext } from '../helpers/index.js';

export default function Home({ protectedUser }) {
  const { data: session } = useSession();
  const { setUser } = fetchContext('user');

  useEffect(() => {
    if (session && protectedUser) {
      setUser({ ...protectedUser });
    }
  }, [session]);

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }
  const db = await connectDB();
  const user = await User.findOne({ email: session.user.email });

  const protectedUser = {
    email: user.email,
    projects: user.projects,
    tasks: user.tasks,
    decks: user.decks,
    pomodoroCycles: user.pomodoroCycles,
  };
  return {
    props: { session, protectedUser },
  };
}
