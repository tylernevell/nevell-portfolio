import { FunctionComponent, useState } from 'react';
import { TypingText } from '../typing-text/typing-text';
import { Typography } from '../typography/typography';
import { useInterval } from '../../hooks/use-interval/use-interval';

const IntroCommand: FunctionComponent = () => {
  const [isPlaying, setPlaying] = useState(true);

  useInterval(
    () => {
      setPlaying(false);
      console.log(isPlaying);
    },
    isPlaying ? 4500 : null
  );

  return (
    <>
      <TypingText>npm run dev</TypingText>
      <Typography
        variant="h2"
        fontFamily="font-sans"
        size="text-xs"
        textAlign="text-center"
        color="text-on-primary-hover"
        className={`mt-1 underline ${
          isPlaying
            ? 'opacity-0'
            : 'transition duration-1000 ease-in opacity-100'
        }`}
      >
        press enter
      </Typography>
    </>
  );
};

export { IntroCommand };
