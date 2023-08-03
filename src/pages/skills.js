import { useEffect } from "react";
import { useState, useRef } from "react";
import { Link } from "react-scroll";

//components
import Lava from "../components/lava";
import Table from "../components/table";

//images
import bgSkills from "../images/Back-ground/BigSize/Abilities.png";
import bgStalactites from "../images/Back-ground/BigSize/Estalactitas.png";

export default function Skills(props) {
  const divRef = useRef();

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
          <Table />
          <div className="skills_content-box2"></div>
        </div>
      </div>
    </section>
  );
}
