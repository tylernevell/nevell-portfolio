import { FunctionComponent, useState, useEffect } from 'react';
import { useInterval } from '../../hooks/use-interval/use-interval';
import { IntroCommand } from '../intro-command/intro-command';
import { MainMenu } from '../main-menu/main-menu';
import { linkItems } from '../nav-bar/link-items';

// TODO: Add a11y functionality to links. Should be able to tab and enter to use links

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
    const listener = () => {
      setEnterIsPressed(true);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, []);

  useEffect(() => {
    const listener = (event: { code: string; preventDefault: () => void }) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault();
        setEnterIsPressed(true);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <>
      <IntroCommand
        className={
          enterIsPressed
            ? 'transition duration-1000 ease-in-out opacity-0 -z-10'
            : 'opacity-100 z-10'
        }
      />
      <MainMenu
        links={linkItems}
        className={
          enterIsPressed
            ? 'transition duration-1000 ease-in-out opacity-100 z-10 pointer-events-auto'
            : 'opacity-0 -z-10'
        }
      />
    </>
  );
};

export { Intro };
