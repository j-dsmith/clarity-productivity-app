import { getSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import useSWR from 'swr';
import { fetchData } from '../helpers/client.js';
import Layout from '../components/layout.js';

export default function Home({}) {
  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto&days=2&aqi=no&alerts=no`;

  const { data: fetchedUser, error: userError } = useSWR(
    '/api/user',
    fetchData
  );

  const user = fetchedUser ? fetchedUser.data : null;

  const { data: fetchedForecast, error: forecastError } = useSWR(
    weatherURL,
    fetchData
  );

  const weather = fetchedForecast ? fetchedForecast : null;

  return (
    <Layout>
      <Dashboard user={user} weather={weather} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
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
