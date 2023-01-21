import { useState } from "react";

export default function useDimension(data) {
  const [newData, setNewData] = useState(data);

  function dimension(reference) {
    const ref = reference.current;
    const { height, width } = ref.getBoundingClientRect();
    setNewData({
      ...data,
      hDiv: height,
      wDiv: width,
    });
  }

  return {
    dimension,
    newData,
  };
}
