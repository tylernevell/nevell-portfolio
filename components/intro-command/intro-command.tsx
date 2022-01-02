import { FunctionComponent, useState } from "react";
import { TypingText } from "../typing-text/typing-text";
import { Typography } from "../typography/typography";
import { useInterval } from "../../hooks/use-interval/use-interval";

type PropsType = {
  className: string;
};

const IntroCommand: FunctionComponent<PropsType> = (props) => {
  const { className } = props;

  const [isPlaying, setPlaying] = useState(true);

  useInterval(
    () => {
      setPlaying(false);
      console.log(isPlaying);
    },
    isPlaying ? 4500 : null
  );

  return (
    <section
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 container flex w-full h-auto m-auto ${className}`}
    >
      <header className="relative mx-auto place-self-center">
        <TypingText>npm run dev</TypingText>
        <Typography
          variant="p"
          fontFamily="font-sans"
          size="text-xs"
          textAlign="text-center"
          color="text-on-primary-hover"
          className={`mt-1 underline ${
            isPlaying
              ? "opacity-0"
              : "transition duration-1000 ease-in opacity-100"
          }`}
        >
          press enter
        </Typography>
      </header>
    </section>
  );
};

export { IntroCommand };
