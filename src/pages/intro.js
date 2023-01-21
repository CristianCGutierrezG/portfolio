import { Parallax } from "react-parallax";

//background
import bgMontains from "../images/Back-ground/BigSize/bg-Montains.png";
import bgClouds from "../images/Back-ground/BigSize/clouds2.png";
import bgRocks from "../images/Back-ground//BigSize/bg-Rocks.png";
import bgMontain from "../images/Back-ground//BigSize/bg-Montain.png";
import bgTitle from "../images/Back-ground//BigSize/TitleName.png";
import bgTitleFront from "../images/Back-ground//BigSize/TitleFrontEnd.png";
import bgTitleDev from "../images/Back-ground//BigSize/TitleDeveloper.png";

export default function Intro() {
  return (
    <>
      <div className="intro_bgParallax">
        <Parallax
          bgImage={bgMontains}
          bgImageStyle={{ height: "100%", width: "100%" }}
          strength={700}
        >
          <Parallax
            bgImage={bgRocks}
            bgImageStyle={{ height: "100%", width: "100%" }}
            strength={500}
          >
            <Parallax
              bgImage={bgClouds}
              bgImageStyle={{
                height: "100%",
                width: "200%",
                left: "100%",
                animation: "clouds 15s linear infinite",
              }}
              strength={600}
            >
              <Parallax
                bgImage={bgMontain}
                bgImageStyle={{ height: "100%", width: "100%" }}
                strength={300}
              >
                <Parallax
                  bgImage={bgTitle}
                  bgImageStyle={{ height: "30%", width: "50%", top: "18%" }}
                  strength={250}
                >
                  <Parallax
                    bgImage={bgTitleFront}
                    bgImageStyle={{
                      height: "9%",
                      width: "23%",
                      top: "57%",
                      left: "27%",
                    }}
                    strength={250}
                  >
                    <Parallax
                      bgImage={bgTitleDev}
                      style={{ height: "100vh", width: "100hv" }}
                      bgImageStyle={{
                        height: "9%",
                        width: "23%",
                        top: "57%",
                        left: "72%",
                      }}
                      strength={250}
                    ></Parallax>
                  </Parallax>
                </Parallax>
              </Parallax>
            </Parallax>
          </Parallax>
        </Parallax>
      </div>
    </>
  );
}
