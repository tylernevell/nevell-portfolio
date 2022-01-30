import type { NextPage } from 'next';
import { Intro } from '../components/intro/intro';

// export const getStaticProps: GetStaticProps = async () => {
//   const menuItems = await fetch(ROUTE.PAGE).then((r) => r.json());
//   if (!menuItems) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data: {
//         menuItems,
//       },
//     },
//   };
// };

const Home: NextPage = () => {
  return (
    <main className="flex flex-1 h-screen bg-primary-default">
      <Intro />
    </main>
  );
};

export default Home;
