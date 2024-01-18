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

export default function Skills(props) {
  const divRef = useRef();

  const contentTable = [
    {key:1, name:"HTML", img: scHTMl, NumCoins: 3},
    {key:2, name:"CSS", img: scCSS, NumCoins: 3},
    {key:3, name:"JS", img: scJS, NumCoins: 2},
    {key:4, name:"React", img: scReact, NumCoins: 2}
  ] 

  return (
    <section id={props.id}>
      <div
        className="skills_background"
        style={{
          backgroundImage: `url(${bgSkills})`,
        }}
      >
        <div className="skills_background-lava" ref={divRef}>
          <Lava reference={divRef} />
        </div>
        <div
          className="skills_background-stalactites"
          style={{
            backgroundImage: `url(${bgStalactites})`,
          }}
        />
        <div className="skills_content">
          <Table content={contentTable} />
          <div className="skills_content-box2"></div>
        </div>
      </div>
    </section>
  );
}
