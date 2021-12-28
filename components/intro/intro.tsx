import { FunctionComponent, useState, useEffect } from 'react';
import { useInterval } from '../../hooks/use-interval/use-interval';
import { IntroCommand } from '../intro-command/intro-command';
import { MainMenu } from '../main-menu/main-menu';

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

  // render both main menu and intro command, but on enterIsPressed,
  // switch z indices and change opacity for both.
  // introcmd is opacity 100 on start. mainmenu is opacity 0 on start.
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
        className={
          enterIsPressed
            ? 'transition delay-1000 duration-1000 ease-in-out opacity-100 z-10'
            : 'opacity-0 -z-10'
        }
      />
    </>
  );
};

export { Intro };
