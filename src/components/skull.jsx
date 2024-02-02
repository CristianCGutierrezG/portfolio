import { useState, useEffect, useRef,} from "react";

//components
import Actor from "./actor";

//hooks
import useInfoRef from "../hooks/useInfoRef";
import useAnimation from "../hooks/useAnimation";
import useHandleResize from "../hooks/useHandleResize";

//images
import spSkull from "../images/Sprites/BigSize/Skull.png";


export default function Skull({ onHover, click}) {
    const divRef = useRef();
    const [sizeData, setSizeData] = useState({
        hBackground: 900,
        wBackground: 200,
      });
    
      const [step, setStep] = useState(0);
      const [dir, setDir] = useState(0);
      const { dataSize, size } = useInfoRef(divRef);
    
      useEffect(() => {
        size();
        setSizeData({ ...sizeData, ...dataSize });
      }, []);
    
      useHandleResize(() => {
        size();
        setSizeData({ ...sizeData, ...dataSize });
      });
    
      function fn() {
        setStep((prev) => (prev < 8 ? prev + 1 : 0));
      }
    
    
      const {animateTime, requestRef } = useAnimation(
        1000 / 8,
        Date.now(),
        null,
        fn,
        900
      );
    
      useEffect(() => {
       
      }, [])
      
      async function handleHoverOn() {
        await new Promise((resolve) => {
            size();
            setSizeData({ ...sizeData, ...dataSize });
            setTimeout(() => {
                setStep(0);
                setDir(1);
                resolve();
            }, 910);
            requestRef.current = requestAnimationFrame(animateTime);
        });
        return cancelAnimationFrame(requestRef.current);
      }

      async function handleHoverOff() {
        await new Promise((resolve) => {
              cancelAnimationFrame(requestRef.current);
              setTimeout(() => {
                  setStep(0);
                  setDir(0);
                  resolve();
              }, 910);
              requestRef.current = requestAnimationFrame(animateTime);
          });
          return cancelAnimationFrame(requestRef.current);
      }
    
      return(
        <>
        <div className="scSkull_actor" ref={divRef}>
        <Actor  sprite={spSkull} data={sizeData} step={step} dir={dir}  />
        </div>
        <button
          className="scSkull_box"
          onMouseEnter={handleHoverOn}
          onMouseLeave={handleHoverOff}
          onClick={() => click()}
        ></button>
      </>
      ); 

}