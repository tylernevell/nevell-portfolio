import { useState } from "react";
import { useInterval } from "../../hooks/use-interval/use-interval";

const SpinDecor = () => {
  const spinningFrames = ["[\\]", "[\u2014]", "[/]", "[|]", ""];
  const [count, setCount] = useState(0);
  const maxIndexOfSpinningFrames = spinningFrames.length - 1;

  useInterval(() => {
    const next = count + 1;
    setCount(next % maxIndexOfSpinningFrames);
  }, 135);

  return <>{spinningFrames[count]}</>;
};

export { SpinDecor };
