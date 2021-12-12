import { useEffect } from 'react';
import { getSession, useSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import { fetchProtectedUser } from '../helpers/db.js';

import Layout from '../components/layout.js';
import { fetchContext, fetchWeather } from '../helpers/client.js';

export default function Home({ weather }) {
  const { data: session } = useSession();
  const { user, setUser } = fetchContext('user');

  useEffect(() => {
    if (session) {
      (async () => {
        const fetchedUser = await fetchProtectedUser();
        setUser(fetchedUser);
      })();
    }
  }, [session]);

  return (
    <Layout>
      <Dashboard user={user} weather={weather} />
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

  const response = await fetchWeather();
  if (response) {
    return { props: { session, weather: response.data } };
  }

  return { props: { session } };
}
