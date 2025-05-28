// src/components/ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top left
  }, [pathname]);

  return null;
};

export default ScrollToTop;
