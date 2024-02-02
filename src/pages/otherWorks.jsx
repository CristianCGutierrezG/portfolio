import { useState } from "react";

//components
import IntroPage from "../components/introPage";
import CardPage from "../components/cardPage";

//images
import bgRiver from "../images/Back-ground/BigSize/River.gif";


export default function OtherWorks(props) { 
  const [showInfo, setShowInfo] = useState(0);
  
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
                OTHER WORKS
              </h1>
            </div>
          </div>
          <div className="otherWorks_content__box2">
            <div className="otherWorks_content__box2-intern">
              <div id="up">
                <IntroPage gif={bgRiver} click={() => handleClickSkull(1)}/>
              </div>
              <div id="down">
                <IntroPage gif={bgRiver} click={() => handleClickSkull(2)}/>
              </div>
              <div id="up">
                <IntroPage gif={bgRiver} click={() => handleClickSkull(3)}/>
              </div>
            </div>
          </div> 
          {showInfo === 1 ?
            (<CardPage
              img={bgRiver}
              title="Hellow motherfuker"
              desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                    fuga molestias quasi! Voluptatum nemo tempora maxime necessitatibus 
                    dolorum facilis iusto recusandae enim reprehenderit. Saepe modi minima 
                    blanditiis porro accusantium voluptatem."
              linkGitPage="#"
              linkGitRepo="#"
              info = {showInfo}
              click={() => handleClickSkull(0)}
            >
              <ul>
                <li>React</li>
                <li>JS</li>
                <li>SASS</li>
              </ul>
              <ul>
                <li>HTML5</li>
              </ul>
            </CardPage>)
          :showInfo === 2 ? 
          (<CardPage
            img={bgRiver}
            title="ABOUT ME"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  fuga molestias quasi! Voluptatum nemo tempora maxime necessitatibus 
                  dolorum facilis iusto recusandae enim reprehenderit. Saepe modi minima 
                  blanditiis porro accusantium voluptatem."
            linkGitPage="#"
            linkGitRepo="#"
            info = {showInfo}
            click={() => handleClickSkull(0)}
          >
            <ul>
              <li>React</li>
              <li>JS</li>
              <li>SASS</li>
            </ul>
            <ul>
              <li>HTML5</li>
            </ul>
          </CardPage>)
          : showInfo === 3 ? 
          (<CardPage
            img={bgRiver}
            title="i did't"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
                  fuga molestias quasi! Voluptatum nemo tempora maxime necessitatibus 
                  dolorum facilis iusto recusandae enim reprehenderit. Saepe modi minima 
                  blanditiis porro accusantium voluptatem."
            linkGitPage="#"
            linkGitRepo="#"
            info = {showInfo}
            click={() => handleClickSkull(0)}
          >
            <ul>
              <li>React</li>
              <li>JS</li>
              <li>SASS</li>
            </ul>
            <ul>
              <li>HTML5</li>
            </ul>
          </CardPage>)
          :null
          }
        </div> 
          
        </div>
      </section>
    );
  }
  