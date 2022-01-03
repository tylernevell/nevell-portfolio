import type { NextPage } from "next";
import Head from "next/head";
import { Intro } from "../components/intro/intro";

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
    <div>
      <Head>
        <title>Tyler Nevell: Frontend Engineer</title>
        <meta
          name="description"
          content="Tyler Nevell is a Frontend Engineer with experience building out responsive and beautiful web applications."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Libre+Franklin:ital,wght@0,400;0,500;0,700;0,800;1,400&family=Trispace:wdth,wght@125,500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="application-name"
          content="Tyler Nevell Frontend Engineer"
        />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <meta name="theme-color" content="#317EFB" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <main className="flex flex-1 h-screen bg-primary-default">
        <Intro />
      </main>
    </div>
  );
};

export default Home;
