import { useState, useEffect } from "react";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";

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

  function fn() {
    setStep((prev) => (prev < 3 ? prev + 1 : 0));
  }


  const {animateTime, requestRef } = useAnimation(
    1000 / 8,
    Date.now(),
    null,
    fn,
    800
  );

  function handleHoverOn() {
    size();
    setSizeData({ ...sizeData, ...dataSize });
    setTimeout(function () {
        setStep(0);
    }, 850);
    requestRef.current = requestAnimationFrame(animateTime);
    return () => cancelAnimationFrame(requestRef.current);
  }




  return(
    <>
    <Actor sprite={spCoin} data={sizeData} step={step} />
    <div
        className="scCoin__box"
        onMouseEnter={handleHoverOn}
      ></div>
  </>
  ); 
}
