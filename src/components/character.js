//Components
import Actor from "./actor";

//hooks
import useHandleScroll from "../hooks/useHandleScroll";
import useHandleResize from "../hooks/useHandleResize";

//image
import spCharacter from "../images/Sprites/BigSize/Character.png";
import useInfoRef from "../hooks/useInfoRef";
import useWalk from "../hooks/useWalk";
import { useState, useEffect } from "react";

export default function Character({ reference, fn }) {
  const [sizeData, setSizeData] = useState({
    hBackground: 1000,
    wBackground: 200,
  });
  const { dataSize, size } = useInfoRef(reference);
  const { dir, step, walk } = useWalk();

  useEffect(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  }, []);

  useHandleScroll(() => {
    fn(reference);
    size();
    setSizeData({ ...sizeData, ...dataSize });
    walk();
  });

  useHandleResize(() => {
    size();
    setSizeData({ ...sizeData, ...dataSize });
  });

  return <Actor sprite={spCharacter} data={sizeData} step={step} dir={dir} />;
}
