import { useState } from "react";

export default function useWalk() {
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  function walk() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    setDir(() => (st > lastScrollTop ? 0 : 1));
    setLastScrollTop(st);
    setStep((prev) => (prev < 8 ? prev + 1 : 1));
    setLastScrollTop(st);
  }

  return {
    walk,
    dir,
    step,
  };
}
