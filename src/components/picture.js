//hooks
import useInfoRef from "../hooks/useInfoRef";
import useHandleScroll from "../hooks/useHandleScroll";

import { useEffect } from "react";

//images
export default function Picture({ reference, scroll, img }) {
  const { dataY, YPosition } = useInfoRef(reference);

  useEffect(() => {
    YPosition();
  }, []);

  useHandleScroll(() => {
    YPosition();
  });

  return (
    <div
      className={`about_content-box1-picture ${
        scroll
          ? "animate__animated animate__zoomOutDown"
          : dataY <= 250 && dataY >= -100
          ? "animate__animated animate__fadeIn animate__slow"
          : "animate__animated animate__fadeOut animate__slow"
      } `}
    >
      <img src= {img} alt="PresentationIMG" />
    </div>
  );
}
