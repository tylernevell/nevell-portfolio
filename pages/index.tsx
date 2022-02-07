import type { NextPage } from 'next';
import { FadeInVisible } from '../components/fade-in-visible/fade-in-visible';
import { MainMenu } from '../components/main-menu/main-menu';
import { linkItems } from '../components/nav-bar/link-items';

const Home: NextPage = () => {
  return (
    <main className="flex flex-1 h-screen bg-primary-default">
      <FadeInVisible>
        <MainMenu links={linkItems} />
      </FadeInVisible>
    </main>
  );
};

export default Home;
