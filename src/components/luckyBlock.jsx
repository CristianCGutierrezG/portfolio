import { useState, useEffect } from "react";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";

//images
import spLuckyBlock from "../images/Sprites/BigSize/LuckyBlock.png";

export default function LuckyBlock({ reference, click, show }) {
  const [sizeData, setSizeData] = useState({
    hBackground: 400,
    wBackground: 200,
  });

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(0);
  const { dataSize, size } = useInfoRef(reference);

  useEffect(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  }, []);

  useHandleResize(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  });

  function fn() {
    setStep((prev) => (prev < 3 ? prev + 1 : 0));
  }

  function fn2() {
    setStep((prev) => (prev < 2 ? prev + 1 : 0));
  }

  const { animateInfinite, animateTime, requestRef } = useAnimation(
    1000 / 8,
    Date.now(),
    fn,
    fn2,
    400
  );

  function handleHoverOn() {
    size();
    setSizeData({ ...sizeData, ...dataSize });
    requestRef.current = requestAnimationFrame(animateInfinite);
    return () => cancelAnimationFrame(requestRef.current);
  }

  function handleHoverOff() {
    cancelAnimationFrame(requestRef.current);
    setTimeout(function () {
      setDir(0);
      setStep(0);
    }, 450);
    requestRef.current = requestAnimationFrame(animateTime);
    return () => cancelAnimationFrame(requestRef.current);
  }

  function handleClick() {
    cancelAnimationFrame(requestRef.current);
    click();
    setDir(1);
    setTimeout(function () {
      setStep(3);
    }, 450);
    requestRef.current = requestAnimationFrame(animateTime);
    return () => cancelAnimationFrame(requestRef.current);
  }

  return (
    <div className="luckyBlock">
      <Actor sprite={spLuckyBlock} data={sizeData} step={step} dir={dir} />
      <button
        className="luckyBlock__btn"
        // style={{ zIndex: show !== 0 ? 0 : 1001 }}
        onMouseEnter={handleHoverOn}
        onMouseLeave={handleHoverOff}
        onClick={handleClick}
      ></button>
    </div>
  );
}
