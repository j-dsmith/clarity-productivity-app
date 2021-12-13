import { getSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import useSWR from 'swr';
import { fetchData } from '../helpers/client.js';
import Layout from '../components/layout.js';

export default function Home({}) {
  let user;
  let weather;
  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto&days=2&aqi=no&alerts=no`;

  const { data: fetchedUser, error: userError } = useSWR(
    '/api/user',
    fetchData
  );
  if (fetchedUser) {
    user = fetchedUser.data;
  }

  const { data: fetchedForecast, error: forecastError } = useSWR(
    weatherURL,
    fetchData
  );

  if (fetchedForecast) {
    weather = fetchedForecast;
  }

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
