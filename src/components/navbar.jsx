import { useRef, useState } from "react";
import { Link } from "react-scroll";

//components
import Character from "./character";

//hooks
import useHandleScroll from "../hooks/useHandleScroll";

//images
import spBarMenu from "../images/Sprites/BigSize/Bar-menu.png";
import spButtonIntro from "../images/Sprites/BigSize/Button-menuIntro.png";
import spButtonSkills from "../images/Sprites/BigSize/Button-menuSkills.png";
import spButtonContact from "../images/Sprites/BigSize/Button-menuContact.png";
import spButtonOWorks from "../images/Sprites/BigSize/Button-menuOWorks.png";
import spButtonAbout from "../images/Sprites/BigSize/Button-menuAbout.png";
import spCharacter1 from "../images/Sprites/BigSize/Character1.png";

export default function Navbar() {
  const characterRef = useRef();
  const barRef = useRef();
  const windowReference = useRef();
  const [visible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [dif, setDif] = useState(1)
  const [onHover, setOnHover] = useState(0)
  const [content, setContent] = useState("")
  

  useHandleScroll(()=>{
    setScrollY(window.scrollY);
  });

  function calcReference(reference){
    const ref = reference.current;
    const { height } = ref.getBoundingClientRect();
    return height;
  }

  function cal() {
    let barHeight= calcReference(barRef);
    let windowHeight = calcReference(windowReference)*4;
    setDif(windowHeight / barHeight); 
  }
  const transformStyle = {
    transform: `translateY(${scrollY/dif}px)`, 
  };

  const handleHoverOn =(text, value) => {
    setOnHover(value);
    setContent(text);
  }

  const handleHoverOff = () =>{
    setOnHover(0);
  }

  function fn(reference) {
    const ref = reference.current;
    const { y } = ref.getBoundingClientRect();
    cal();
    // if (y > window - 5) {
    //   setVisible(false);
    // } else {
    //   setVisible(true);
    // }
  }

  return (
    <>
      <div className="navbar" >
        <img src={spBarMenu} alt="barMenu" className="navbar-bar" ref={windowReference} />
        <nav className="navbar-nav">
          <div className="navbar-nav-button">
            <img src={spButtonIntro} alt="navButton" className="navbar-bar" />
          </div>
          <div className="navbar-nav-button">
            <img src={spButtonAbout} alt="navButton" className="navbar-bar" />
          </div>
          <div className="navbar-nav-button">
            <img src={spButtonSkills} alt="navButton" className="navbar-bar" />
          </div>
          <div className="navbar-nav-button">
            <img src={spButtonOWorks} alt="navButton" className="navbar-bar" />
          </div>
          <div className="navbar-nav-button">
            <img src={spButtonContact} alt="navButton" className="navbar-bar" />
          </div>
        </nav>

        <div
          style={{ paddingLeft: "1.25em" }}
          className="navbar-characterContent"
        >
            <div
              className="navbar-characterContent-scroll"
              style={transformStyle}
            >
              <div
                className="navbar-characterContent-scroll-image"
                ref={characterRef}
              >
                <Character reference={characterRef} fn={fn} />
              </div>
            </div>
        </div>
        <div ref={barRef} className="reference" />
        <nav className="navbar-nav">
          <div className="navbar-nav-button">
            <button 
              onMouseLeave={handleHoverOff} 
              onMouseEnter={()=>handleHoverOn("Home", 1)}>
              <Link
                className="navbar-nav-button-link"
                to="intro"
                spy={true}
                smooth={true}
                duration={1000}
              />
          </button>
          {onHover===1 &&
            (<div className="navbar-nav-button-hoverInfo">
              <h2>{content}</h2>
            </div>)}
          </div>
          
          <div className="navbar-nav-button">
            <button 
              onMouseLeave={handleHoverOff} 
              onMouseEnter={()=>handleHoverOn("About me", 2)}>
              <Link
                className="navbar-nav-button-link"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              />
          </button>
          {onHover===2 &&
            (<div className="navbar-nav-button-hoverInfo">
              <h2>{content}</h2>
            </div>)}
          </div>
          
          <div className="navbar-nav-button">
            <button 
              onMouseLeave={handleHoverOff} 
              onMouseEnter={()=>handleHoverOn("Skills", 3)}>
              <Link
                className="navbar-nav-button-link"
                to="skills"
                spy={true}
                smooth={true}
                duration={1000}
              />
          </button>
          {onHover===3 &&
            (<div className="navbar-nav-button-hoverInfo">
              <h2>{content}</h2>
            </div>)}
          </div>
          
          <div className="navbar-nav-button">
            <button 
              onMouseLeave={handleHoverOff} 
              onMouseEnter={()=>handleHoverOn("Other works", 4)}>
              <Link
                className="navbar-nav-button-link"
                to="otherWorks"
                spy={true}
                smooth={true}
                duration={1000}
              />
          </button>
          {onHover===4 &&
            (<div className="navbar-nav-button-hoverInfo">
              <h2>{content}</h2>
            </div>)}
          </div>
          
          <div className="navbar-nav-button">
            <button 
              onMouseLeave={handleHoverOff} 
              onMouseEnter={()=>handleHoverOn("Contact", 5)}>
              <Link
                className="navbar-nav-button-link"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
            />
            </button>
            {onHover===5 &&
            (<div className="navbar-nav-button-hoverInfo">
              <h2>{content}</h2>
            </div>)}
          </div>
          
        </nav>
        {!visible && (
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
        )}
      </div>
    </>
  );
}
