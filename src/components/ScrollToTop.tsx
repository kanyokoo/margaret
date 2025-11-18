// src/components/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // This hook returns the current location object.
  const { pathname } = useLocation();

  // This hook will run every time the pathname changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component doesn't render any visible UI, so it returns null.
  return null;
};

export default ScrollToTop;