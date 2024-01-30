import { useState, useRef } from "react";
import { Link } from "react-scroll";

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




export default function Skills(props) {
  const divRef = useRef();
  const [actualTable, setActualTable] = useState(0)

 

  const contentTable = [
    [
      {key:1, name:"HTML", img: scHTMl, NumCoins: 3},
      {key:2, name:"CSS", img: scCSS, NumCoins: 3},
      {key:3, name:"JS", img: scJS, NumCoins: 2},
      {key:4, name:"React", img: scReact, NumCoins: 2}
    ],

    [
      {key:5, name:"figma", img: scHTMl, NumCoins: 3},
      {key:6, name:"Photho", img: scCSS, NumCoins: 2},
      {key:7, name:"sql", img: scJS, NumCoins: 2},
      {key:8, name:"pixel", img: scReact, NumCoins: 2}
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
          {/* <Lava reference={divRef} /> */}
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
                <div className={`arrowBox-arrow arrow-left 
                  ${actualTable === 1 ? 
                    "animate__animated animate__fadeIn  animate__fast animate__delay-2s"
                    : "animate__animated animate__fadeOut  animate__fast"
                  } `} 
                  >
                  <button onClick={()=>{setActualTable(0)}} />
                </div> 
                <div className={`arrowBox-arrow arrow-right 
                  ${actualTable === 0 ? 
                    "animate__animated animate__fadeIn  animate__fast animate__delay-2s"
                    : "animate__animated animate__fadeOut  animate__fast"
                  } `} 
                  >
                  <button onClick={()=>{setActualTable(1)}} />
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
