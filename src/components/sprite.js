import cursorHand from "../images/Sprites/BigSize/cursorHand.png";
export default function Sprite({ image, data }) {
  const { y, x, hBackground, wBackground } = data;

  return (
    <div
      style={{
        display: "inline-block",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: `${hBackground}% ${wBackground}%`,
        backgroundPosition: `-${x}px -${y}px`,
        lineHeight: "0",
        // cursor: `url(${cursorHand}), pointer`,
      }}
    />
  );
}
