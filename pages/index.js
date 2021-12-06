import { useSession } from 'next-auth/react';
import Dashboard from '../components/dashboard/index.js';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export default function Home() {
  return <Dashboard />;
}

// export async function getServerSideProps({ req, res }) {
//   const session = await getSession({ req });

//   if (!session) {
//     return {
//       redirect: '/auth',
//       permanent: false,
//       props: {},
//     };
//   }
//   return {
//     props: { session },
//   };
// }
