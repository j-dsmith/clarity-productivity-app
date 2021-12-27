import { getSession } from 'next-auth/react';

import LoginPage from '../components/auth/login-page';

const AuthPage = ({ session }) => {
  return <LoginPage />;
};

export async function getServerSideProps({ req, res }) {
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}

export default AuthPage;
