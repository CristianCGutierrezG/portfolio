import { useRef, useState } from "react";

//Components
import Coin from "./coin";

//images

export default function Table({content}) {
  const [onHover, setOnHover] = useState(false)
  const divRef = useRef();

  function handleHoverOn() {
    setOnHover(true);
  }

  function handleHoverOff() {
    setOnHover(false);
  }

  const getCoins = Num => {
    let content = [];
    for(let i = 0; i < 3; i++){
      content.push(
        i < Num ?
        <div key={i} className="table_row-element">
          <div className="scCoin" ref={divRef}>
            <Coin reference={divRef} />
          </div>
        </div> 
        :
        <div key={i} className="table_row-element"/>
      )
    }
    return content;
  }

  return (
    <div className="table">
      <div className="table_row top">
        <div className="table_row-element"></div>
        <div className="table_row-element">
          <h5>BEGINNER</h5>
        </div>
        <div className="table_row-element">
          <h5>INTERMEDIATE</h5>
        </div>
        <div className="table_row-element">
          <h5>ADVANCED</h5>
        </div>
      </div>
      
      
      {content.map(item => (
      <div key={item.key} className="table_row" >
        <div className="table_row-element">
          <div className="table_row-element-hoverInfo" 
          onMouseLeave={handleHoverOff} 
          onMouseEnter={handleHoverOn}
            style={{
              display: onHover ? "block" : "none",
            }}>
            <h2>{item.name}</h2>
          </div>
          <div className="table_row-element-logo" 
            onMouseLeave={handleHoverOff} 
            onMouseEnter={handleHoverOn}
            style={{
              backgroundImage: `url(${item.img})`,
            }}
          />
          {getCoins(item.NumCoins)}
        </div>
      </div>
      ))}
    </div>
  );
}
