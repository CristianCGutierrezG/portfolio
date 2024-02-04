import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { Howl, Howler } from "howler";
import { motion } from "framer-motion";

//components
import LuckyBlock from "../components/luckyBlock";
import Picture from "../components/picture";
import Card from "../components/card";


//images
import bgAbout from "../images/Back-ground/BigSize/about2.png";
import bgPipeline from "../images/Back-ground/BigSize/pipeline.png";
import picture from "../images/PresentationPicture.jpeg";
import spBook from "../images/Sprites/BigSize/Book.png";
import spControl from "../images/Sprites/BigSize/Control.png";
import spDraw from "../images/Sprites/BigSize/Draw.png";
import spStoryteller from "../images/Sprites/BigSize/Storyteller.png";
import arrow from "../images/Sprites/BigSize/ArrowPoint.png"

//sounds
import soundPipeline from "../sounds/MarioPipeline.mp3";

export default function About(props) {
  const [scrollOn, setScrollOn] = useState(false);
  const [showInfo, setShowInfo] = useState(0);
  const [clickArrow, setClickArrow] = useState(false);
  var Scroll = require("react-scroll");
  var Events = Scroll.Events;

  useEffect(() => {
    Events.scrollEvent.register("end", () => {
      setScrollOn(false);
    });
  }, []);

  function SoundPlay(src) {
    const sound = new Howl({
      src,
    });
    sound.play();
    Howler.volume(0.3);
  }

  function handleClickPipeline() {
    setScrollOn(true);
    setTimeout(function () {
      SoundPlay(soundPipeline);
    }, 800);
  }

  const handleClickLuckyblock = (ButtonId) => {
    setShowInfo(ButtonId);
    setClickArrow(true)
  };

  const divRef = useRef();
  const blockRef = useRef();

  return (
    <section id={props.id}>
      <div
        ref={divRef}
        className="about_background"
        style={{
          backgroundImage: `url(${bgAbout})`,
        }}
      >
        <div className="about_content">
          <div className="about_content-box1">
            <Picture reference={divRef} scroll={scrollOn} img={picture} />
          </div>
          <div className="about_content-box2">
            <div className="about_content-box2-flex">
              <div className="about_content-box2-flex-center left">
                <div className="about_content-box2-luckyBlock" ref={blockRef}>
                  <LuckyBlock
                    reference={blockRef}
                    click={() => handleClickLuckyblock(1)}
                    show={showInfo}
                  />
                </div>
              </div>
            </div>
            {!clickArrow && (
            <motion.div
              style={{
              backgroundImage: `url(${arrow})`,
              }}
              className="about_content-arrow"
              animate={{
                translateY: [10, -10, 10, -10, 10],
              }}
              transition={{
              duration: 2,
              repeat: Infinity,
              }}
            />
            )}
            <div className="about_content-box2-flex ">
              <div className="about_content-box2-flex-center right">
                <div className="about_content-box2-luckyBlock" ref={blockRef}>
                  <LuckyBlock
                    reference={blockRef}
                    click={() => handleClickLuckyblock(2)}
                    show={showInfo}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="about_content-boxPipeline"
            style={{
              backgroundImage: `url(${bgPipeline})`,
            }}
          >
            <Link
              className="about_content-boxPipeline-link"
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              duration={1000}
              delay={1500}
              onClick={handleClickPipeline}
            />
          </div>

          {showInfo === 1 ? (
            <div className="about_content-div">
              <Card
                title="ABOUT ME"
                show={showInfo}
                click={() => handleClickLuckyblock(0)}
              >
                <div>
                  <p>
                    I am a Freelance Developer with experience as a FrontEnd
                    developer, eager to improve my knowledge and gain work
                    experience, always trying to give the best of me
                  </p>
                </div>
                <div>
                  <p>
                    I code and design cool and creative websites and i am 
                    also a pixel art artist
                  </p>
                </div>
              </Card>
            </div>
          ) : showInfo === 2 ? (
            <div className="about_content-div">
              <Card
                title="HOBBIES"
                show={showInfo}
                click={() => handleClickLuckyblock(0)}
              >
                <div>
                  <div>
                    <p>VIDEO GAMES</p>
                    <div id="hobbies_img">
                      <img src={spControl} alt="GamesImg" />
                    </div>
                  </div>
                  <div>
                    <p>DRAW</p>
                    <div id="hobbies_img">
                      <img src={spDraw} alt="HobbiesImg" />
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <p>STORYTELLING</p>
                    <div id="hobbies_img">
                      <img src={spStoryteller} alt="StoryImg" />
                    </div>
                  </div>
                  <div>
                    <p>READ / WRITE</p>
                    <div id="hobbies_img">
                      <img src={spBook} alt="BookImg" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ) 
          : null
          }
        </div>
      </div>
    </section>
  );
}
