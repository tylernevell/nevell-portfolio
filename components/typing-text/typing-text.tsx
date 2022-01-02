import { FunctionComponent, useState } from "react";
import { useInterval } from "../../hooks/use-interval/use-interval";
import { Typography } from "../typography/typography";

type PropsType = {
  children: string;
  className?: string;
};

const TypingText: FunctionComponent<PropsType> = (props) => {
  const { children = "npm run dev", className = "" } = props;
  const [text, updateText] = useState("n");
  const [isPlaying, setPlaying] = useState(true);
  const [pointer, updatePointer] = useState(1);

  useInterval(
    () => {
      if (text.length < children.length) {
        updateText((t) => (t = t + children[pointer]));
        updatePointer((p) => (p = p + 1));
      } else {
        setPlaying(false);
        return;
      }
    },
    isPlaying ? 200 : null
  );

  return (
    <Typography
      variant="span"
      size="text-3xl"
      color="text-on-primary-hover"
      fontFamily="font-mono"
      className={`relative inline-block typing-text ${className}`}
    >
      {text}
    </Typography>
  );
};

export { TypingText };
