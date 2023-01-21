//Components
import Actor from "./actor";

//hooks
import useHandleScroll from "../hooks/useHandleScroll";

//image
import spCharacter from "../images/Sprites/BigSize/Character.png";
import useDimension from "../hooks/useDimension";
import useWalk from "../hooks/useWalk";

export default function Character({ reference, fn }) {
  const data = {
    hBackground: 1000,
    wBackground: 200,
  };
  const { newData, dimension } = useDimension(data);
  const { dir, step, walk } = useWalk();

  useHandleScroll(() => {
    fn(reference);
    dimension(reference);
    walk();
  });

  return <Actor sprite={spCharacter} data={newData} step={step} dir={dir} />;
}
