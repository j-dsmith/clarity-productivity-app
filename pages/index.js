import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import connectDB, { fetchProtectedUser } from '../helpers/db.js';

import Layout from '../components/layout.js';
import { fetchContext } from '../helpers/index.js';

export default function Home() {
  const { data: session } = useSession();
  const { user, setUser } = fetchContext('user');

  useEffect(() => {
    if (session) {
      (async () => {
        const user = await fetchProtectedUser();
        setUser(user);
      })();
    }
  }, [session]);

  return (
    <Layout>
      <Dashboard user={user} />
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

  return { props: { session } };
}
