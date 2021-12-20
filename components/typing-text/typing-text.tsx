import { FunctionComponent, useState } from 'react';
import { useInterval } from '../../hooks/use-interval/use-interval';
import type { PropsType as TypographyPropsType } from '../typography/types';
import { Typography } from '../typography/typography';

type PropsType = {
  children: string;
};

const TypingText: FunctionComponent<PropsType> = (props) => {
  const { children = 'npm run dev' } = props;
  const [text, updateText] = useState('n');
  const [delay, setDelay] = useState(300);
  const [isPlaying, setPlaying] = useState(true);
  const [pointer, updatePointer] = useState(1);
  // steps:
  // take string and treat it as array
  // add each letter to new array(the one that displays) at every interval until end of array
  useInterval(
    () => {
      if (text.length < children.length) {
        updateText((t) => (t = t + children[pointer]));
        updatePointer((p) => (p = p + 1));
      }
    },
    isPlaying ? delay : null
  );

  return (
    <Typography
      variant="h2"
      size="text-3xl"
      color="text-on-primary-hover"
      fontFamily="font-mono"
      className="relative inline-block typing-text"
    >
      {text}
    </Typography>
  );
};

export { TypingText };
