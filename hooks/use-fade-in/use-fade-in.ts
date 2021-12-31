import { useRef } from 'react';
import { isNil } from '../../utils/is-nil';
import { useMount } from '../use-mount/use-mount';

const useFadeIn = (delay: number, startPos = [0, '175%', 0]) => {
  const ref = useRef(null);
  useMount(() => {
    if (typeof document === 'undefined' || isNil(ref?.current)) return;
    const keyframe = [
      { transform: `translate3D(${startPos.join(',')})`, opacity: 0 },
      { transform: 'translate3D(0, 0, 0)', opacity: 1 },
    ];

    // @ts-ignore
    ref.current.animate(keyframe, {
      easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      duration: 450,
      delay: delay * (250 / 4),
      fill: 'forwards',
    });
  });
  return ref;
};

export { useFadeIn };
