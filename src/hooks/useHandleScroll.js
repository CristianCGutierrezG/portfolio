import { useEffect } from "react";

export default function useHandleScroll(fn) {
  useEffect(() => {
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, [fn]);
}
