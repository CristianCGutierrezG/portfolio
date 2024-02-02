import { useRef } from "react";

export default function useAnimation(fpsInterval, then, fn, fn2, time) {
  const requestRef = useRef();
  let now, elapsed, start;

  const animateInfinite = () => {
    now = Date.now();
    elapsed = now - then;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      fn();
    }
    requestRef.current = requestAnimationFrame(animateInfinite);
  };

  const animateTime = (timestamp) => {
    now = Date.now();
    elapsed = now - then;
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed2 = timestamp - start;

    if (elapsed > fpsInterval) {
      then = now - (elapsed % fpsInterval);
      fn2();
    }

    if (elapsed2 < time) {
      requestRef.current = requestAnimationFrame(animateTime);
    }
  };

  return {
    animateInfinite,
    animateTime,
    requestRef,
  };
}
