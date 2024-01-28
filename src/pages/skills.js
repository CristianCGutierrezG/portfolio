import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

//components
import Lava from "../components/lava";
import Table from "../components/table";

//images
import bgSkills from "../images/Back-ground/BigSize/Abilities.png";
import bgStalactites from "../images/Back-ground/BigSize/Estalactitas.png";
import scHTMl from "../images/Sprites/BigSize/HTML.png";
import scCSS from "../images/Sprites/BigSize/CSS.png";
import scJS from "../images/Sprites/BigSize/JS.png";
import scReact from "../images/Sprites/BigSize/React.png";
import { act } from "react-dom/test-utils";

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
        <div className="skills__background-lava" ref={divRef}>
          <Lava reference={divRef} />
        </div>
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
              
              <div 
              className={`arrow arrow-left 
              ${actualTable === 1 ? 
                "animate__animated animate__slideInLeft  animate__slow"
                : "animate__animated animate__slideOutLeft  animate__slow"
              } `} 
              onClick={()=>{setActualTable(0)} }>
              </div>
              
              <div className="content__box2-intern-table">
                <div 
                  className={` 
                  ${actualTable === 0 ? 
                    "animate__animated animate__slideInLeft  animate__slow"
                    : "animate__animated animate__slideOutLeft  animate__slow"
                  } `} 
                  style={{width: "100%", height: "100%"}}
                >
                  <Table content={contentTable[0]}/>
                </div>
              
                <div 
                  className={` 
                  ${actualTable === 1 ? 
                    "animate__animated animate__slideInRight  animate__slow"
                    : "animate__animated animate__slideOutRight  animate__slow"
                  } `} 
                  style={{width: "100%", height: "100%", transform: " translate3d(0, 66vh, 0)"}}
                >
                  <Table content={contentTable[1]}
                  className = "exception"
                  />
                </div>
              </div>
              
              <div 
                className={`arrow arrow-right 
                ${actualTable === 0 ? 
                  "animate__animated animate__slideInRight  animate__slow"
                  : "animate__animated animate__slideOutLeft  animate__slow"
                } `} 
                // style={{display: actualTable == 0 ? "block" : "none",}}
                onClick={()=>{setActualTable(1)} }>
              </div>
            </div>
            <div className="content__box2-batbox" ></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
