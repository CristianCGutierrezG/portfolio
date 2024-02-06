import { useState } from "react";
import { Howl, Howler } from "howler";
import { motion } from "framer-motion";

//components
import CardEmail from "../components/cardEmail";

//images
import bgCastle from "../images/Back-ground/BigSize/Castle.gif";
import imgGitRepo from "../images/Sprites/BigSize/GitHub.png";
import imgLinkedin from "../images/Sprites/BigSize/LinkedIn.png";
import eyes from "../images/Sprites/BigSize/Eyes.png";
import arrow from "../images/Sprites/BigSize/ArrowPoint.png"

//sounds
import soundBowser from "../sounds/bowserLaugh.mp3";

export default function Contact(props) {
  const [hovered, setHovered] = useState(false);
  const [click, setClick] = useState(false);
  const [clickArrow, setClickArrow] = useState(false)

  async function playSoundAsync(src) {
    return new Promise((resolve) => {
      const sound = new Howl({
        src,
        onend: resolve,
      });
      sound.play();
      Howler.volume(0.3);
    });
  }

  function handleMouseEnter() {
    setHovered(true);
    playSoundAsync(soundBowser);
  }
  function handleClick() {
    !click ? setClick(true) : setClick(false); 
    setClickArrow(true);
  }

  return (
    <section id={props.id}>
      <div
        className="contact_background"
        style={{
          backgroundImage: `url(${bgCastle ? bgCastle : ""})`,
        }}
      >
        <div className="contact_links">
          <div className="contact_links-box">
            <a href="https://github.com/CristianCGutierrezG">
              <img src={imgGitRepo} alt="GitHubRepo" />
            </a>
          </div>
          <div className="contact_links-box">
            <a href="https://www.linkedin.com/in/cristian-guti%C3%A9rrez-5aba6a240/">
              <img src={imgLinkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>
        {!clickArrow && (
          <motion.div
            style={{
              backgroundImage: `url(${arrow})`,
            }}
            className="contact_arrow"
            animate={{
              translateY: [10, -10, 10, -10, 10],
            }}
            transition={{
            duration: 2,
            repeat: Infinity,
            }}
            />
        )}
        <div className="contact_email">
          <button
            className="contact_email_button"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
          >
            <div className="contact_email_button-eyes">
              {hovered && (
                <div
                  className="contact_email_button-eyes-pixel"
                  style={{
                    backgroundImage: `url(${eyes ? eyes : ""})`,
                  }}
                />
              )}
            </div>
          </button>
        </div>
        {click && 
        (<CardEmail info={click} click={handleClick}></CardEmail>)}
      </div>
    </section>
  );
}