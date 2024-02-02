import React from "react";
import Sprite from "./sprite";

export default function Actor({ sprite, data, step = 0, dir = 0 }) {
  const { hBackground, wBackground, hDiv, wDiv } = data;
  return (
    <Sprite
      image={sprite}
      data={{
        x: step * wDiv,
        y: dir * hDiv,
        hBackground,
        wBackground,
      }}
    />
  );
}
