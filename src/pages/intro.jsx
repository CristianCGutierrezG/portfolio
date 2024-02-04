import { Parallax } from "react-parallax";
import { useState } from "react";
import { Howl, Howler } from "howler";
import { motion } from "framer-motion";

//Components
import FrontEnd from "../components/Titles/frontEnd";
import Developer from "../components/Titles/developer";

//background
import bgMontains from "../images/Back-ground/BigSize/bg-Montains.png";
import bgClouds from "../images/Back-ground/BigSize/clouds2.png";
import bgRocks from "../images/Back-ground//BigSize/bg-Rocks.png";
import bgMontain from "../images/Back-ground//BigSize/bg-Montain.png";
import bgTitle from "../images/Back-ground//BigSize/TitleName.png";
import musicalNote from "../images/Sprites/BigSize/MusicalNote.png";

//sounds
import marioSong from "../sounds/MarioIntro.mp3";

export default function Intro(props) {
  const [click, setClick] = useState(false);

  function SoundPlay(src) {
    const sound = new Howl({
      src,
    });
    sound.play();
    Howler.volume(0.5);
  }

  function handleClick() {
    if (!click) SoundPlay(marioSong);
    setClick(true);
  }

  return (
    <section id={props.id}>
      <div className="intro_bgParallax">
        <Parallax
          bgImage={bgMontains}
          bgImageStyle={{ height: "100%", width: "100%" }}
          strength={700}
        >
          <Parallax
            bgImage={bgRocks}
            bgImageStyle={{ 
              height: "100%", 
              width: "100%", 
              backdropFilter: "blur(1.2px)"}}
            strength={500}
          >
            <Parallax
              bgImage={bgClouds}
              bgImageStyle={{
                height: "100%",
                width: "200%",
                left: "100%",
                animation: "clouds 15s linear infinite",
                backdropFilter: "blur(0.7px)"
              }}
              strength={600}
            >
              <Parallax
                bgImage={bgTitle}
                bgImageStyle={{ height: "30%", width: "50%", top: "18%" }}
                strength={50}
              >
                <Parallax>
                  <FrontEnd
                    style={{
                      position: "absolute",
                      top: "58%",
                      left: "10%",
                      width: "30%",
                      height: "11%",
                    }}
                    click={click}
                  />
                  <Developer
                    style={{
                      position: "absolute",
                      top: "57.7%",
                      left: "60%",
                      width: "30%",
                      height: "11%",
                    }}
                    click={click}
                  />
                  {!click && (
                    <motion.button
                      style={{
                        backgroundImage: `url(${musicalNote})`,
                      }}
                      className="intro_music"
                      onClick={handleClick}
                      animate={{
                        rotate: [10, -10, 10, -10, 10],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                  <Parallax
                    bgImage={bgMontain}
                    style={{ height: "100vh", width: "100hv" }}
                    bgImageStyle={{
                      height: "100%",
                      width: "100%",
                    }}
                    strength={2}
                  ></Parallax>
                </Parallax>
              </Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </div>
    </section>
  );
}
