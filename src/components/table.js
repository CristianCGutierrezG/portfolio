import { useRef } from "react";

//Components
import Coin from "./coin";

//images
import scHTMl from "../images/Sprites/BigSize/HTML.png";
import scCSS from "../images/Sprites/BigSize/CSS.png";
import scJS from "../images/Sprites/BigSize/JS.png";
import scReact from "../images/Sprites/BigSize/React.png";

export default function Table() {
  const divRef = useRef();
  return (
    <div className="table">
      <div className="table_row top">
        <div className="table_row-element"></div>
        <div className="table_row-element">
          <h5>BEGINNER</h5>
        </div>
        <div className="table_row-element">
          <h5>ELEMENTARY</h5>
        </div>
        <div className="table_row-element">
          <h5>INTERMEDIATE</h5>
        </div>
        <div className="table_row-element">
          <h5>ADVANCED</h5>
        </div>
        <div className="table_row-element">
          <h5>EXPERT</h5>
        </div>
      </div>

      <div className="table_row">
        <div className="table_row-element">
          <div
            className="table_row-element-logo"
            style={{
              backgroundImage: `url(${scHTMl})`,
            }}
          />
        </div>
        <div className="table_row-element">
          <div className="scCoin" ref={divRef}>
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element"></div>
      </div>

      <div className="table_row">
        <div className="table_row-element">
          <div
            className="table_row-element-logo"
            style={{
              backgroundImage: `url(${scCSS})`,
            }}
          />
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element"></div>
      </div>

      <div className="table_row">
        <div className="table_row-element">
          <div
            className="table_row-element-logo"
            style={{
              backgroundImage: `url(${scJS})`,
            }}
          />
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element"></div>
        <div className="table_row-element"></div>
      </div>

      <div className="table_row">
        <div className="table_row-element">
          <div
            className="table_row-element-logo"
            style={{
              backgroundImage: `url(${scReact})`,
            }}
          />
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element">
          <div className="scCoin">
            <Coin reference={divRef} />
          </div>
        </div>
        <div className="table_row-element"></div>
        <div className="table_row-element"></div>
        <div className="table_row-element"></div>
      </div>
    </div>
  );
}
