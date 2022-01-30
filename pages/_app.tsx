import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalLayout } from '../components/layout/global-layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title>Tyler Nevell: Front-end Engineer</title>
        <meta
          name="description"
          content="The Digital Porfolio of Tyler Nevell: a Front-end Engineer with experience building out responsive and beautiful web applications."
        />
        <meta name="author" content="Tyler Nevell" />
        <meta name="keywords” content=”front-end developer, front-end development, front-end engineer, web designer, tyler nevell" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="NevellTyler" />
        <meta name="twitter:creator" content="@NevellTyler" />
        <meta property="og:url" content="https://tylernevell.dev/" />
        <meta property="og:title" content="Tyler Nevell: Front-end Engineer" />
        <meta
          property="og:description"
          content="The Digital Porfolio of Tyler Nevell: a Front-end Engineer with experience building out responsive and beautiful web applications."
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/de3scdzao/image/upload/v1643578396/portfolio/previewimage_q5efqx.png"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:alt" content="A Portfolio for Tyler Nevell" />
        <meta name="generator" content="NextJS" />
      </Head>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </>
  );
}

export default MyApp;
