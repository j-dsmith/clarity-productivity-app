import { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import AuthForm from '../components/auth/auth-form';
import MyForm from '../components/auth/formik-form';
import LoginPage from '../components/auth/login-page';

const AuthPage = ({ session }) => {
  return <LoginPage />;
  // return <AuthForm />;
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
