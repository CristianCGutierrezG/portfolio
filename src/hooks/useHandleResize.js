import { useEffect } from "react";

export default function useHandleResize(fn) {
  useEffect(() => {
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [fn]);
}
