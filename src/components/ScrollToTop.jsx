import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return;
}

export default ScrollToTop;
