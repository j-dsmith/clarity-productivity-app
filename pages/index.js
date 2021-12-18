import { getSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';
import useSWR from 'swr';
import { fetchData } from '../helpers/client.js';
import Layout from '../components/layout.js';
import { useContext, useEffect } from 'react';
import UserContext from '../store/user-ctx.js';

export default function Home({}) {
  const weatherURL = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=auto&days=2&aqi=no&alerts=no`;

  const userCtx = useContext(UserContext);
  const { user, setUser } = userCtx;

  const { data: fetchedUser, error: userError } = useSWR(
    '/api/user',
    fetchData
  );

  useEffect(() => {
    if (fetchedUser) {
      setUser(fetchedUser.data);
    }
  }, [fetchedUser]);

  const { data: fetchedForecast, error: forecastError } = useSWR(
    weatherURL,
    fetchData
  );

  const weather = fetchedForecast ? fetchedForecast : null;

  return (
    <Layout>
      <Dashboard weather={weather} />
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
