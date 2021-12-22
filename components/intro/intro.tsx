import { FunctionComponent, useState, useEffect } from 'react';
import { useInterval } from '../../hooks/use-interval/use-interval';
import { IntroCommand } from '../intro-command/intro-command';
import { NameTitleCard } from '../name-title-card/name-title-card';

const Intro: FunctionComponent = () => {
  const [isPlaying, setPlaying] = useState(true);
  const [enterIsPressed, setEnterIsPressed] = useState(false);

  useInterval(
    () => {
      setPlaying(false);
      console.log(isPlaying);
    },
    isPlaying ? 2400 : null
  );

  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        console.log('useffect enter');
        event.preventDefault();
        setEnterIsPressed(true);
      }
    };
    document.addEventListener('keydown', listener);
    console.log('useeffect no enter');
    return () => {
      console.log('useffect return');
      document.removeEventListener('keydown', listener);
    };
  }, []);

  if (enterIsPressed && !isPlaying) {
    return (
      <section className="container w-full h-auto m-auto">
        <header className="relative flex w-full h-full m-auto">
          <NameTitleCard />
        </header>
      </section>
    );
  } else {
    return (
      <section className="container flex flex-1 w-full h-full mx-auto">
        <header className="relative mx-auto place-self-center">
          <IntroCommand />
        </header>
      </section>
    );
  }
};

export { Intro };
