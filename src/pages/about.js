import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";
import { Howl, Howler } from "howler";

//components
import LuckyBlock from "../components/luckyBlock";
import Picture from "../components/picture";
import Card from "../components/card";

//hooks

//images
import bgAbout from "../images/Back-ground/BigSize/about2.png";
import bgPipeline from "../images/Back-ground/BigSize/pipeline.png";

//sounds
import soundPipeline from "../sounds/MarioPipeline.mp3";

export default function About(props) {
  const [scrollOn, setScrollOn] = useState(false);
  const [showInfo, setShowInfo] = useState(0);
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
    Howler.volume(0.4);
  }

  function handleClickPipeline() {
    setScrollOn(true);
    setTimeout(function () {
      SoundPlay(soundPipeline);
    }, 800);
  }

  const handleClickLuckyblock = (ButtonId) => {
    setShowInfo(ButtonId);
    // document.body.className = "stop-scrolling";
    // console.log(document.body.className);
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
            <Picture reference={divRef} scroll={scrollOn} />
          </div>
          <div className="about_content-box2">
            <div className="about_content-box2-flex">
              <div className="about_content-box2-flex-center left">
                <div className="about_content-box2-luckyBlock" ref={blockRef}>
                  <LuckyBlock
                    reference={blockRef}
                    click={() => handleClickLuckyblock(1)}
                  />
                </div>
              </div>
            </div>
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
                title="ABOUT"
                show={showInfo}
                click={() => handleClickLuckyblock(0)}
              >
                <p>
                  I am a Freelance Developer with experience as a FrontEnd
                  developer, eager to improve my knowledge and gain work
                  experience, always trying to give the best of me
                </p>
              </Card>
            </div>
          ) : showInfo === 2 ? (
            <div className="about_content-div">
              <Card
                title="HOBBIES"
                show={showInfo}
                click={() => handleClickLuckyblock(0)}
              >
                <p>VIDEO GAMES</p>
              </Card>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
