//components
import Character from "./character";

//hooks
import { useRef, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  Move,
  batch,
} from "react-scroll-motion";

//images
import spBarMenu from "../images/Sprites/BigSize/Bar-menu.png";
import spButton from "../images/Sprites/BigSize/Button-menu.png";
import spCharacter1 from "../images/Sprites/BigSize/Character1.png";

export default function Navbar() {
  const characterRef = useRef();
  const barRef = useRef();
  const [visible, setVisible] = useState(true);
  const [window, setWindow] = useState(0);

  function cal() {
    const ref = barRef.current;
    const { height } = ref.getBoundingClientRect();
    setWindow(height);
  }

  function fn(reference) {
    const ref = reference.current;
    const { y } = ref.getBoundingClientRect();
    cal();
    if (y > window - 5) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  return (
    <>
      <div className="navbar">
        <img src={spBarMenu} alt="barMenu" className="navbar-bar" />
        <nav className="navbar-nav">
          <div className="navbar-nav-button">
            <img src={spButton} alt="navButton" className="navbar-bar" />
            <button></button>
          </div>
          <div className="navbar-nav-button">
            <img src={spButton} alt="navButton" className="navbar-bar" />
            <button></button>
          </div>
          <div className="navbar-nav-button">
            <img src={spButton} alt="navButton" className="navbar-bar" />
            <button></button>
          </div>
          <div className="navbar-nav-button">
            <img src={spButton} alt="navButton" className="navbar-bar" />
            <button></button>
          </div>
          <div className="navbar-nav-button">
            <img src={spButton} alt="navButton" className="navbar-bar" />
            <button></button>
          </div>
        </nav>
        <ScrollContainer
          style={{ paddingLeft: "1.25em" }}
          className="navbar-characterContent"
        >
          <ScrollPage page={0} className="navbar-characterContent-scroll">
            <Animator
              className="navbar-characterContent-scroll"
              animation={batch(Move(null, 0, null, window))}
            >
              <div
                className="navbar-characterContent-scroll-image"
                ref={characterRef}
              >
                <Character reference={characterRef} fn={fn} />
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
        <div ref={barRef} className="reference" />
        {!visible ? (
          <div className="base">
            <img
              src={spCharacter1}
              alt="character"
              className="base-character"
              style={{
                top: `${window}px`,
              }}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}
