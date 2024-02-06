import { useState, useRef } from "react";

//components
import Bat from "../components/bat";
import Table from "../components/table";

//images
import bgSkills from "../images/Back-ground/BigSize/Abilities.png";
import bgStalactites from "../images/Back-ground/BigSize/Estalactitas.png";
import bgLava from "../images/Back-ground/BigSize/Lava1.gif"
import scHTMl from "../images/Sprites/BigSize/HTML.png";
import scCSS from "../images/Sprites/BigSize/CSS.png";
import scJS from "../images/Sprites/BigSize/JS.png";
import scReact from "../images/Sprites/BigSize/React.png";
import scSASS from "../images/Sprites/BigSize/SASS.png";
import scGIT from "../images/Sprites/BigSize/GIT.png";
import scNode from "../images/Sprites/BigSize/Node.png";
import scSQL from "../images/Sprites/BigSize/SQL.png";
import scArrow from "../images/Sprites/BigSize/arrow.png";


export default function Skills(props) {
  const divRef = useRef();
  const [actualTable, setActualTable] = useState(0)

  const contentTable = [
    [
      {key:1, name:"HTML5", img: scHTMl, NumCoins: 3},
      {key:2, name:"CSS3", img: scCSS, NumCoins: 3},
      {key:3, name:"JS", img: scJS, NumCoins: 2},
      {key:4, name:"React", img: scReact, NumCoins: 2}
    ],

    [
      {key:5, name:"SASS", img: scSASS, NumCoins: 2},
      {key:6, name:"GIT", img: scGIT, NumCoins: 2},
      {key:7, name:"Node.js", img: scNode, NumCoins: 2},
      {key:8, name:"SQL", img: scSQL, NumCoins: 1}
    ]
    
  ] 

  return (
    <section id={props.id}>
      <div
        className="skills__background"
        style={{
          backgroundImage: `url(${bgSkills})`,
        }}
      >
        <div className="skills__background-lava" 
          style={{
            backgroundImage: `url(${bgLava})`,
          }}/>
        <div
          className="skills__background-stalactites"
          style={{
            backgroundImage: `url(${bgStalactites})`,
          }}
        />
        <div className="content">
          <div className="content__box1">
            <div className="content__box1-title" >
              <h1>
                SKILLS
              </h1>
            </div>
          </div>
          <div className="content__box2">
            <div className="content__box2-intern">
              <div className="content__box2-intern-table">
                  <Table content={contentTable[0]} actual={actualTable} animationIn={"animate__slideInLeft"} animationOut={"animate__slideOutLeft"}/>
                  <Table content={contentTable[1]} actual={actualTable} animationIn={"animate__slideInLeft"} animationOut={"animate__slideOutLeft"}/>
              </div>
              <div className="arrowBox">
                <div className={`arrowBox-arrow 
                  ${actualTable === 1 ? 
                    "animate__animated animate__fadeIn  animate__fast animate__delay-2s"
                    : "animate__animated animate__fadeOut  animate__fast"
                  } `} 
                  >
                  <button onClick={()=>{setActualTable(0)}} style={{
                    backgroundImage: `url(${scArrow})`,
                  }}/>   
                </div> 
                <div className={`arrowBox-arrow arrow-right 
                  ${actualTable === 0 ? 
                    "animate__animated animate__fadeIn  animate__fast animate__delay-2s"
                    : "animate__animated animate__fadeOut  animate__fast"
                  } `} 
                  >
                  <button onClick={()=>{setActualTable(1)}} style={{
                    backgroundImage: `url(${scArrow})`
                  }}/>
                </div>
              </div>
            </div>
            <div className="scBat" ref={divRef}>
              <Bat reference={divRef}/>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
