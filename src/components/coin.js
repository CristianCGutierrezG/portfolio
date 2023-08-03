import { useState, useEffect } from "react";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";
import useHandleScroll from "../hooks/useHandleScroll";

//images
import spCoin from "../images/Sprites/BigSize/coin.png";

export default function Coin({ reference }) {
  const [sizeData, setSizeData] = useState({
    hBackground: 400,
    wBackground: 100,
  });

  const [step, setStep] = useState(0);
  const { dataSize, size } = useInfoRef(reference);

  useEffect(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  }, []);

  useHandleResize(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  });

  useHandleScroll(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
    console.log(sizeData);
  });
  function fn() {
    setStep((prev) => (prev < 3 ? prev + 1 : 0));
  }

  const { animateInfinite, requestRef } = useAnimation(
    1000 / 6,
    Date.now(),
    fn,
    null,
    400
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateInfinite);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animateInfinite, requestRef]);

  return <Actor sprite={spCoin} data={sizeData} step={step} />;
}
