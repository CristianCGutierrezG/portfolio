import { useRef, useState } from "react";

//Components
import Skull from "./skull";

//Images


//Hooks



export default function Intro({ gif, click }) {
    const [onHover, setOnHover] = useState(false);
    const [visible, setVisible] = useState(false);
  
    function handleHoverOn() {
        return new Promise((resolve) => {
          setOnHover(true);
          resolve();
        }).then(() => {
          setVisible(true);
        });
      }
      
      function handleHoverOff() {
        return new Promise((resolve) => {
          setOnHover(false);
          resolve();
        }).then(() => {
          setTimeout(() => {
            setVisible(false);
          }, 300); 
        });
      }
  
    return (
      <>
        <div className="introPage">
          {visible ? (
            <div
              className={`introPage_gif ${onHover ? "expanding" : "retracting"}`}
              onMouseEnter={() => handleHoverOn().then(() => {})}
              onMouseLeave={() => handleHoverOff().then(() => {})}
              onAnimationEnd={() => {
                if (!onHover) setVisible(false);
              }}
            >
              <img src={gif} alt="introGif"></img>
            </div>
          ) : null}
  
          <div
            className="scSkull"
            onMouseEnter={() => handleHoverOn().then(() => {})}
            onMouseLeave={() => handleHoverOff().then(() => {})}
          >
            <Skull click={click}/>
          </div>
        </div>
      </>
    );
  }