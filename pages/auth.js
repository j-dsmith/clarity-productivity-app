import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthForm from '../components/auth/auth-form';

const AuthPage = () => {
  return <AuthForm />;
};

// export async function getServerSideProps({ req, res }) {
//   const session = await getSession({ req });
//   if (session) {
//     return {
//       redirect: '/',
//       permanent: false,
//     };
//   }

//   return {
//     props: { session },
//   };
// }

export default AuthPage;
