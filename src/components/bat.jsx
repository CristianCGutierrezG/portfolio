import { useState, useEffect } from "react";
import { Howl, Howler } from "howler";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";

//images
import scBat from "../images/Sprites/BigSize/Bat-Sheet.png";

//sounds
import soundBat from "../sounds/batSound.mp3";

export default function Bat({ reference }) {
  const [sizeData, setSizeData] = useState({
    hBackground: 900,
    wBackground: 100,
  });

  const [step, setStep] = useState(0);
  const { dataSize, size } = useInfoRef(reference);

  function SoundPlay(src) {
    const sound = new Howl({
      src,
    });
    sound.play();
    Howler.volume(0.3);
  }


  function fn() {
    setStep((prev) => (prev < 8 ? prev + 1 : 0));
  }

  function initialize() {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  }

  const { animateTime, requestRef } = useAnimation(
    1000 / 8,
    Date.now(),
    null,
    fn,
    800
  );

  useEffect(() => {
    initialize();
  }, []);

  useHandleResize(() => {
    initialize();
  });


  function handleHoverOn() {
    SoundPlay(soundBat);
    size();
    setSizeData({ ...sizeData, ...dataSize });
    setTimeout(function () {
        setStep(0);
    }, 850);
    requestRef.current = requestAnimationFrame(animateTime);
    return () => cancelAnimationFrame(requestRef.current);
  }

  return (
    <>
      <Actor sprite={scBat} data={sizeData} step={step} />
      <div
        className="scBat__box"
        onMouseEnter={handleHoverOn}
        onClick={handleHoverOn}
      ></div>
    </>
 
  );
}
