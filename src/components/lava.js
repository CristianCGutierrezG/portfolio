import { useState, useEffect } from "react";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";
import useHandleScroll from "../hooks/useHandleScroll";

//images
import bgLava from "../images/Back-ground/BigSize/Lava.png";

export default function Lava({ reference }) {
  const [sizeData, setSizeData] = useState({
    hBackground: 405,
    wBackground: 100,
  });

  const [step, setStep] = useState(0);
  const { dataSize, size, dataY, YPosition } = useInfoRef(reference);

  function fn() {
    setStep((prev) => (prev < 3 ? prev + 1 : 0));
  }

  function initialize() {
    size();
    setSizeData({ ...sizeData, ...dataSize });
    YPosition();
  }

  const { animateInfinite, requestRef } = useAnimation(
    1000 / 4,
    Date.now(),
    fn,
    null,
    450
  );

  useEffect(() => {
    initialize();
  }, []);

  useHandleResize(() => {
    initialize();
  });

  useHandleScroll(() => {
    initialize();
  });

  useEffect(() => {
    if (dataY <= 275 && dataY >= -620) {
      requestRef.current = requestAnimationFrame(animateInfinite);
      return () => cancelAnimationFrame(requestRef.current);
    }
  }, [dataY, animateInfinite, requestRef]);

  return (
    <div className="bgLava">
      <Actor sprite={bgLava} data={sizeData} step={step} />
    </div>
  );
}
