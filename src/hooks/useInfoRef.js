import { useState } from "react";

export default function useInfoRef(reference) {
  const [dataSize, setDataSize] = useState({});
  const [dataY, setDataY] = useState(0);

  function size() {
    const ref = reference.current;
    const { height, width } = ref.getBoundingClientRect();
    setDataSize({
      hDiv: height,
      wDiv: width,
    });
  }

  function YPosition() {
    const ref = reference.current;
    const { y } = ref.getBoundingClientRect();
    setDataY(y);
  }

  return {
    size,
    dataSize,
    YPosition,
    dataY,
  };
}
