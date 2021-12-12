import { getSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import connectDB, { serializeData } from '../helpers/db.js';
import { User } from '../models/user.js';

import Layout from '../components/layout.js';
import { fetchWeather } from '../helpers/client.js';

export default function Home({ weather, user }) {
  return (
    <Layout>
      <Dashboard user={user} weather={weather} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  const {
    user: { email },
  } = session;

  const db = await connectDB();
  const user = await User.findOne({ email });

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
    return {
      props: { session, weather: response.data, user: serializeData(user) },
    };
  }

  return { props: { session, user: serializeData(user) } };
}
