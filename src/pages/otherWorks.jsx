import { useState } from "react";

//components
import IntroPage from "../components/introPage";
import CardPage from "../components/cardPage";

//images
import bgRiver from "../images/Back-ground/BigSize/River.gif";
import bgRaft from "../images/Back-ground/BigSize/Raft.gif";
import gifPixar from "../images/gifPresentation/PixarPage .gif";
import gifConversor from "../images/gifPresentation/divisas.gif";
import gifMovie from "../images/gifPresentation/ReactMovie.gif";


export default function OtherWorks(props) { 
  const [showInfo, setShowInfo] = useState(0);
  const [haveDemo, setHaveDemo] = useState(false);
  
  function handleClickSkull(ButtonId) {
    setShowInfo(ButtonId) 
  }
  
    return (
      <section id={props.id}>
        <div className="otherWorks_background"
          style={{
            backgroundImage: `url(${bgRiver ? bgRiver : ""})`,
          }}
        >     
            <div className="otherWorks_content">
          <div className="otherWorks_content__box1">
            <div className="otherWorks_content__box1-title" >
              <h1>
                PROJECTS
              </h1>
            </div>
          </div>
          <div className="otherWorks_content__box2">
            <div className="otherWorks_content__box2-intern">
              <div className="otherWorks_content__box2-intern-raft" id="up" 
                style={{
                  backgroundImage: `url(${bgRaft ? bgRaft : ""})`,
                }}>
                <IntroPage gif={gifMovie} click={() => {handleClickSkull(1)
                                                        setHaveDemo(false)}}/>
              </div>
              <div className="otherWorks_content__box2-intern-raft" id="down"
                style={{
                  backgroundImage: `url(${bgRaft ? bgRaft : ""})`,
                }}>
                <IntroPage gif={gifConversor} click={() => {handleClickSkull(2)
                                                        setHaveDemo(false)}}/>
              </div>
              <div className="otherWorks_content__box2-intern-raft" id="up"
                style={{
                  backgroundImage: `url(${bgRaft ? bgRaft : ""})`,
                }}>
                <IntroPage gif={gifPixar} click={() => {handleClickSkull(3)
                                                        setHaveDemo(true)}}/>
              </div>
            </div>
          </div> 
          {showInfo === 1 ?
            (<CardPage
              img={gifMovie}
              title="React-movie"
              desc="Website that provides users with detailed 
              information about a wide variety of movies. Connected to themoviedb API."
              linkGitPage="/"
              linkGitRepo="https://github.com/CristianCGutierrezG/React-movie"
              info = {showInfo}
              demo = {haveDemo}
              click={() => handleClickSkull(0)}    
            >
              <div className="cardPage_content_info-intern_tools-title">
              <h3>Tools</h3>
              </div>
              <ul className="cardPage_content_info-intern_tools-content">
                <li>Node.js</li>
                <li>React.js</li>
                <li>CSS</li>
              </ul>
              <div className="cardPage_content_info-intern_tools-title">
              <h3>Features</h3>
              </div>
              <ul className="cardPage_content_info-intern_tools-content">
                <li>🎨 Styled with React-Styled-components and CSS</li>
                <li>📱 Fully Responsive</li>
                <li>📖 Multi-Page Layout</li>
            </ul>
            </CardPage>)
          :showInfo === 2 ? 
          (<CardPage
            img={gifConversor}
            title="Currency converter with API-Rest"
            desc="Basic currency conversion application. 
            This application has been developed using a database to store updated exchange 
            rates and has a REST API to provide access to these exchange rates efficiently."
            linkGitPage="/"
            linkGitRepo="https://github.com/CristianCGutierrezG/Conversion-de-divisas"
            info = {showInfo}
            demo = {haveDemo}
            click={() => handleClickSkull(0)}
          >
            <div className="cardPage_content_info-intern_tools-title">
              <h3>Tools</h3>
            </div>
            <ul className="cardPage_content_info-intern_tools-content">
              <li>Node.js</li>
              <li>React.js</li>
              <li>mySQL</li>
              <li>Express</li>
              <li>VsCode</li>
              <li>Bootstrap</li>
            </ul>
          </CardPage>)
          : showInfo === 3 ? 
          (<CardPage
            img={gifPixar}
            title="Copy of Pixar.com"
            desc="Copy of the Home of the website www.pixar.com"
            linkGitPage="https://cristiancgutierrezg.github.io/Pixar-Page-copy/"
            linkGitRepo="https://github.com/CristianCGutierrezG/Pixar-Page-copy"
            info = {showInfo}
            demo = {haveDemo}
            click={() => handleClickSkull(0)}
          >
            <div className="cardPage_content_info-intern_tools-title">
              <h3>Tools</h3>
            </div>
            <ul className="cardPage_content_info-intern_tools-content">
              <li>HTML5</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>VsCode</li>
            </ul>
            <div className="cardPage_content_info-intern_tools-title">
              <h3>Features</h3>
            </div>
            <ul className="cardPage_content_info-intern_tools-content">
              <li>🎨 Designed with SASS and BEM methodology</li>
              <li>📱 Fully Responsive</li>
              <li>📑 Practice of Vanilla js technologies and basicScroll library</li>
            </ul>
          </CardPage>)
          :null
          }
        </div> 
          
        </div>
      </section>
    );
  }
  